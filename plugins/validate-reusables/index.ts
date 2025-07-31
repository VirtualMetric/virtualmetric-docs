import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import glob from 'fast-glob';

export default function validateReusablesPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-reusables',

    async loadContent() {
      const rootDir = context.siteDir;
      const docsDir = path.join(rootDir, 'docs');
      const reusablesPath = path.join(rootDir, 'src', 'components', 'CustomFeatures', 'Include', 'reusables.json');

      // Read reusables.json
      let reusables;
      try {
        reusables = JSON.parse(await fs.promises.readFile(reusablesPath, 'utf-8'));
      } catch (error) {
        throw new Error(`Failed to read reusables.json: ${error.message}`);
      }
      const validIds = new Set(Object.keys(reusables));

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
            errors.push(`❌ Invalid Include ID '${id}' in file: ${file}`);
          }
        }
      }

      if (errors.length > 0) {
        console.error('\nInclude Validation Errors:\n');
        errors.forEach(err => console.error(err));
        console.error('\nFix invalid Include IDs or update reusables.json.\n');
        throw new Error('Include validation failed. Fix invalid Include IDs or update reusables.json.');
      } else {
        console.log('✅ All Include IDs are valid.');
      }
    },
  };
}