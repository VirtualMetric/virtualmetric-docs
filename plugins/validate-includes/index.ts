import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import { validationConfig, reportValidationErrors, reportValidationSuccess } from '../shared/validation-config';

export default function validateIncludesPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-includes',

    async loadContent() {
      const rootDir = context.siteDir;
      const includesPath = path.join(rootDir, 'includes.json');

      // Read includes.json
      let includes: Record<string, string>;
      try {
        includes = JSON.parse(await fs.promises.readFile(includesPath, 'utf-8'));
      } catch (error) {
        throw new Error(`Failed to read includes.json at ${includesPath}: ${error instanceof Error ? error.message : String(error)}`);
      }
      const validIds = new Set(Object.keys(includes));

      // Validate that all paths in includes.json point to existing files
      const pathErrors: string[] = [];
      const namingErrors: string[] = [];
      const includesRoot = path.join(rootDir, 'src', 'includes');
      
      for (const [id, includePath] of Object.entries(includes)) {
        // Normalize to an absolute path and ensure it lives under includesRoot
        const fullPath = path.resolve(includesRoot, includePath);
        
        // Disallow traversal escaping includesRoot
        const relativePath = path.relative(includesRoot, fullPath);
        if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
          pathErrors.push(`❌ Include ID '${id}' path escapes 'src/includes': '${includePath}'`);
          continue;
        }
        
        try {
          await fs.promises.access(fullPath);
        } catch (error) {
          pathErrors.push(`The '${id}' ID in 'includes.json' points to '${includePath}' which does not exist!`);
        }

        // Validate naming convention: ID should match filename (basename without path)
        const expectedFilename = `${id}.mdx`;
        const actualFilename = path.basename(includePath);
        if (actualFilename !== expectedFilename) {
          namingErrors.push(`❌ Include ID '${id}' should map to a file named '${expectedFilename}' (got '${includePath}')`);
        }
      }

      // Get all MDX files using shared configuration
      const mdxFiles = await validationConfig.getAllMdxFiles(rootDir);

      const errors: string[] = [];

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

        // Match Include components: <Include ... id="some-id" ... />
        const matches = [...content.matchAll(/<Include\b[^>]*\bid=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`The '${id}' in '${relativePath}' does not exist in includes.json!`);
          } else {
            // Check if the file exists for this include
            const includePath = includes[id];
            const fullPath = path.resolve(includesRoot, includePath);
            try {
              await fs.promises.access(fullPath);
            } catch (error) {
              errors.push(`The '${id}' ID in '${relativePath}' points to '${includePath}' which does not exist!`);
            }
          }
        }
      }

      // Combine all types of errors
      const allErrors = [...pathErrors, ...namingErrors, ...errors];

      if (allErrors.length > 0) {
        reportValidationErrors(
          allErrors,
          'Include',
          'Fix invalid Include IDs, update includes.json, add missing include files, or fix naming mismatches.'
        );
      } else {
        reportValidationSuccess('Include', 'filenames');
      }
    },
  };
}