import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import { validationConfig, reportValidationErrors, reportValidationSuccess } from '../shared/validation-config';

export default function validateTopicsPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-topics',

    async loadContent() {
      const rootDir = context.siteDir;
      const docsDir = path.join(rootDir, 'docs');
      const topicsPath = path.join(rootDir, 'topics.json');

      // Read topics.json
      let topics;
      try {
        topics = JSON.parse(await fs.promises.readFile(topicsPath, 'utf-8'));
      } catch (error) {
        throw new Error(`Failed to read topics.json: ${error instanceof Error ? error.message : String(error)}`);
      }
      const validIds = new Set(Object.keys(topics));

      // Validate that all paths in topics.json point to existing files
      const pathErrors: string[] = [];
      for (const [id, topicPath] of Object.entries(topics)) {
        // Convert topic path to file system path
        const cleanPath = (topicPath as string).replace(/^\//, '').replace(/#.*$/, ''); // Remove leading slash and anchor
        const fullPath = path.join(docsDir, `${cleanPath}.mdx`);
        
        try {
          await fs.promises.access(fullPath);
        } catch (error) {
          pathErrors.push(`The '${id}' ID in 'topics.json' points to '${topicPath}' which does not exist!`);
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

        // Naive Topic match: <Topic id="some-id">
        const matches = [...content.matchAll(/<Topic\s+id=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`The '${id}' ID in '${relativePath}' does not exist in topics.json!`);
          } else {
            // Check if the file exists for this topic
            const topicPath = topics[id];
            const cleanPath = topicPath.replace(/^\//, '').replace(/#.*$/, '');
            const fullPath = path.join(rootDir, 'docs', `${cleanPath}.mdx`);
            try {
              await fs.promises.access(fullPath);
            } catch (error) {
              errors.push(`The '${id}' ID in '${relativePath}' points to '${topicPath}' which does not exist!`);
            }
          }
        }
      }

      // Combine both types of errors
      const allErrors = [...pathErrors, ...errors];

      if (allErrors.length > 0) {
        reportValidationErrors(
          allErrors,
          'Topic',
          'Fix invalid Topic IDs, update topics.json, or create missing files.'
        );
      } else {
        reportValidationSuccess('Topic');
      }
    },
  };
}