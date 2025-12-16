import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import { validationConfig, reportValidationErrors, reportValidationSuccess } from '../shared/validation-config';

export default function validateDemoPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-demo',

    async loadContent() {
      const rootDir = context.siteDir;
      const demosPath = path.join(rootDir, 'demos.json');

      // Read demos.json
      let demos: Record<string, string>;
      try {
        demos = JSON.parse(await fs.promises.readFile(demosPath, 'utf-8'));
      } catch (error) {
        throw new Error(`Failed to read demos.json at ${demosPath}: ${error instanceof Error ? error.message : String(error)}`);
      }
      const validIds = new Set(Object.keys(demos));

      // Validate that all Navattic IDs in demos.json are non-empty strings
      const configErrors: string[] = [];
      for (const [id, navatticId] of Object.entries(demos)) {
        if (!navatticId || typeof navatticId !== 'string' || navatticId.trim() === '') {
          configErrors.push(`Demo ID '${id}' has invalid or empty Navattic ID in demos.json`);
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

        // Match Demo components: <Demo ... id="some-id" ... />
        const matches = [...content.matchAll(/<Demo\b[^>]*\bid=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`The '${id}' in '${relativePath}' does not exist in demos.json!`);
          }
        }
      }

      // Combine all types of errors
      const allErrors = [...configErrors, ...errors];

      if (allErrors.length > 0) {
        reportValidationErrors(
          allErrors,
          'Demo',
          'Fix invalid Demo IDs or update demos.json with valid Navattic demo IDs.'
        );
      } else {
        reportValidationSuccess('Demo', 'Navattic IDs');
      }
    },
  };
}
