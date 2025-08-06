import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import glob from 'fast-glob';

export default function validateIncludesPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-includes',

    async loadContent() {
      const rootDir = context.siteDir;
      const docsDir = path.join(rootDir, 'docs');
      const includesPath = path.join(rootDir, 'src', 'components', 'CustomFeatures', 'Include', 'includes.json');

      // Read includes.json
      let includes;
      try {
        includes = JSON.parse(await fs.promises.readFile(includesPath, 'utf-8'));
      } catch (error) {
        throw new Error(`Failed to read includes.json: ${error.message}`);
      }
      const validIds = new Set(Object.keys(includes));

      // Validate that all paths in includes.json point to existing files
      const pathErrors: string[] = [];
      const namingErrors: string[] = [];
      
      for (const [id, includePath] of Object.entries(includes)) {
        // Convert include path to file system path (includes are in src/includes/ directory)
        const fullPath = path.join(rootDir, 'src', 'includes', includePath as string);
        
        try {
          await fs.promises.access(fullPath);
        } catch (error) {
          pathErrors.push(`❌ Include ID '${id}' points to non-existent path '${includePath}' (resolved to '${fullPath}')`);
        }

        // Validate naming convention: ID should match filename (without .mdx extension)
        const expectedFilename = `${id}.mdx`;
        if (includePath !== expectedFilename) {
          namingErrors.push(`❌ Include ID '${id}' should point to '${expectedFilename}'`);
        }
      }

      // Find all MDX files in the docs directory
      const mdxFiles = await glob('**/*.mdx', { cwd: docsDir, absolute: true });

      const errors: string[] = [];

      for (const file of mdxFiles) {
        let content;
        try {
          content = await fs.promises.readFile(file, 'utf-8');
        } catch (error) {
          console.warn(`Warning: Could not read file ${file}: ${error.message}`);
          continue;
        }

        // Match Include components: <Include id="some-id" />
        const matches = [...content.matchAll(/<Include\s+id=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`❌ Include ID '${id}' is invalid`);
          }
        }
      }

      // Combine all types of errors
      const allErrors = [...pathErrors, ...namingErrors, ...errors];

      if (allErrors.length > 0) {
        console.error('\nInclude Validation Errors:\n');
        allErrors.forEach(err => console.error(err));
        console.error('\nFix invalid Include IDs, update includes.json, or add missing include files.\n');
        throw new Error('Include validation failed. Fix invalid Include IDs, update includes.json, or add missing include files.');
      } else {
        console.log('✅ All Include IDs and paths are valid.');
      }
    },
  };
}