import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import { validationConfig, reportValidationErrors, reportValidationSuccess } from '../shared/validation-config';

interface QuoteRequest {
  file: string;
  section: string;
  usedIn: string;
}

export default function validateQuotesPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-quotes',

    getPathsToWatch() {
      // Watch all MDX files for changes to Quote components
      return [
        path.join(context.siteDir, 'docs/**/*.mdx'),
        path.join(context.siteDir, 'src/includes/**/*.mdx'),
      ];
    },

    async loadContent() {
      const rootDir = context.siteDir;
      const docsDir = path.join(rootDir, 'docs');
      
      // Get all MDX files using shared configuration
      const mdxFiles = await validationConfig.getAllMdxFiles(rootDir);
      
      // Log in development mode for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('🔄 Quote plugin: Scanning for Quote component changes...');
      }

      const errors: string[] = [];
      const quoteRequests: QuoteRequest[] = [];

      // Find all Quote component usages
      for (const file of mdxFiles) {
        let content;
        try {
          content = await fs.promises.readFile(file, 'utf-8');
        } catch (error) {
          console.warn(`Warning: Could not read file ${file}: ${error instanceof Error ? error.message : String(error)}`);
          continue;
        }

        // Get the relative path using shared configuration
        const relativePath = validationConfig.getRelativePath(rootDir, file);

        // Match Quote components: <Quote file="..." section="..." />
        const matches = [...content.matchAll(/<Quote\b[^>]*\bfile=["']([^"']+)["'][^>]*\bsection=["']([^"']+)["']/g)];

        for (const match of matches) {
          const quotedFile = match[1];
          const quotedSection = match[2];
          
          quoteRequests.push({
            file: quotedFile,
            section: quotedSection,
            usedIn: relativePath
          });
        }
      }

      // Validate each quote request and extract content
      const quoteRegistry: Record<string, string> = {};
      
      for (const request of quoteRequests) {
        const sourceFilePath = path.join(docsDir, request.file);
        
        // Validate file existence
        try {
          await fs.promises.access(sourceFilePath);
        } catch (error) {
          errors.push(`❌ Quote in '${request.usedIn}' references non-existent file: '${request.file}'`);
          continue;
        }

        // Extract and validate section
        try {
          const content = await fs.promises.readFile(sourceFilePath, 'utf-8');
          const extractedContent = extractSectionFromMdx(content, request.section);
          
          if (!extractedContent) {
            errors.push(`❌ Quote in '${request.usedIn}' references non-existent section '${request.section}' in file '${request.file}'`);
          } else {
            const quoteKey = `${request.file}#${request.section}`;
            quoteRegistry[quoteKey] = extractedContent;
          }
        } catch (error) {
          errors.push(`❌ Quote in '${request.usedIn}' could not read file '${request.file}': ${error instanceof Error ? error.message : String(error)}`);
        }
      }

      // Generate individual MDX files for each quote and a registry
      const generatedDir = path.join(rootDir, 'src', 'generated');
      await fs.promises.mkdir(generatedDir, { recursive: true });
      
      const quoteImports: Record<string, string> = {};
      
      // Create individual MDX files for each quote
      for (const [quoteKey, content] of Object.entries(quoteRegistry)) {
        const safeName = quoteKey.replace(/[^a-zA-Z0-9]/g, '_');
        const quotePath = path.join(generatedDir, `quote-${safeName}.mdx`);
        
        // Write the raw MDX content as an MDX file
        await fs.promises.writeFile(quotePath, content);
        
        quoteImports[quoteKey] = safeName;
      }
      
      // Create the registry that maps quote keys to component names
      let registryContent;
      if (Object.keys(quoteImports).length > 0) {
        registryContent = `// Auto-generated quote registry - do not edit manually
${Object.values(quoteImports).map(safeName => 
  `import Quote_${safeName} from './quote-${safeName}.mdx';`
).join('\n')}

const registry = {
${Object.entries(quoteImports).map(([quoteKey, safeName]) => 
  `  "${quoteKey}": Quote_${safeName},`
).join('\n')}
};

export default registry;
`;
      } else {
        registryContent = `// Auto-generated quote registry - do not edit manually
const registry = {};

export default registry;
`;
      }
      
      const registryPath = path.join(generatedDir, 'quotes-registry.js');
      await fs.promises.writeFile(registryPath, registryContent);

      if (errors.length > 0) {
        reportValidationErrors(
          errors,
          'Quote',
          'Fix invalid Quote file paths, add missing files, or fix section references.'
        );
      } else {
        const quoteCount = quoteRequests.length;
        const uniqueQuotes = new Set(quoteRequests.map(q => `${q.file}#${q.section}`)).size;
        
        if (process.env.NODE_ENV === 'development' && quoteCount > 0) {
          console.log(`✅ Quote plugin: Generated ${uniqueQuotes} quote components`);
        }
        
        reportValidationSuccess(
          'Quote', 
          `${quoteCount} quote usages (${uniqueQuotes} unique quotes)`
        );
      }
    },
  };
}

/**
 * Extract content between specified heading and the next heading of same or higher level
 */
function extractSectionFromMdx(mdxContent: string, sectionTitle: string): string | null {
  const lines = mdxContent.split('\n');
  
  let sectionStartIndex = -1;
  let sectionLevel = 0;
  
  // Find the section heading
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      const [, hashes, title] = headingMatch;
      const level = hashes.length;
      
      if (title.trim() === sectionTitle.trim()) {
        sectionStartIndex = i + 1; // Start after the heading
        sectionLevel = level;
        break;
      }
    }
  }
  
  if (sectionStartIndex === -1) {
    return null; // Section not found
  }
  
  // Find where the section ends (next heading of same or higher level)
  let sectionEndIndex = lines.length;
  for (let i = sectionStartIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      const [, hashes] = headingMatch;
      const level = hashes.length;
      
      if (level <= sectionLevel) {
        sectionEndIndex = i;
        break;
      }
    }
  }
  
  // Extract the section content
  const sectionLines = lines.slice(sectionStartIndex, sectionEndIndex);
  const sectionContent = sectionLines.join('\n').trim();
  
  // Return raw MDX content without any conversion
  return sectionContent;
}

