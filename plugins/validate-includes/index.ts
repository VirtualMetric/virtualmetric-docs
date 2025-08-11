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
          pathErrors.push(`❌ Include ID '${id}' points to non-existent path '${includePath}' (resolved to '${fullPath}')`);
        }

        // Validate naming convention: ID should match filename (basename without path)
        const expectedFilename = `${id}.mdx`;
        const actualFilename = path.basename(includePath);
        if (actualFilename !== expectedFilename) {
          namingErrors.push(`❌ Include ID '${id}' should map to a file named '${expectedFilename}' (got '${includePath}')`);
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

        // Match Include components: <Include ... id="some-id" ... />
        const matches = [...content.matchAll(/<Include\b[^>]*\bid=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`❌ Include ID '${id}' is invalid in file '${path.relative(rootDir, file)}'`);
          }
        }
      }

      // Combine all types of errors
      const allErrors = [...pathErrors, ...namingErrors, ...errors];

      if (allErrors.length > 0) {
        console.error('\nInclude Validation Errors:\n');
        allErrors.forEach(err => console.error(err));
        console.error('\nFix invalid Include IDs, update includes.json, add missing include files, or fix naming mismatches.\n');
        throw new Error('Include validation failed. Fix invalid Include IDs, update includes.json, add missing include files, or fix naming mismatches.');
      } else {
        console.log('✅ All Include IDs, paths, and filenames are valid.');
      }
    },
  };
}