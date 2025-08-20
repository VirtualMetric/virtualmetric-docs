import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import glob from 'fast-glob';

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
        throw new Error(`Failed to read topics.json: ${error.message}`);
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
          pathErrors.push(`The ${id} in topics.json points to ${topicPath} which does not exist!`);
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

        // Get the relative path for cleaner error messages
        const relativePath = path.relative(docsDir, file);

        // Naive Topic match: <Topic id="some-id">
        const matches = [...content.matchAll(/<Topic\s+id=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            // Check if the id exists in topics.json but points to a non-existent file
            if (topics[id]) {
              const topicPath = topics[id];
              const cleanPath = topicPath.replace(/^\//, '').replace(/#.*$/, '');
              const fullPath = path.join(docsDir, `${cleanPath}.mdx`);
              
              try {
                await fs.promises.access(fullPath);
                // If we reach here, the file exists but the ID validation failed for some other reason
                errors.push(`The ${id} in ${relativePath} does not exist!`);
              } catch (error) {
                // The file the topic points to doesn't exist
                errors.push(`The ${id} in ${relativePath} points to ${topicPath} which does not exist!`);
              }
            } else {
              // The id doesn't exist in topics.json at all
              errors.push(`The ${id} in ${relativePath} does not exist!`);
            }
          }
        }
      }

      // Combine both types of errors
      const allErrors = [...pathErrors, ...errors];

      if (allErrors.length > 0) {
        console.error('\nTopic Validation Errors:\n');
        allErrors.forEach(err => console.error(err));
        console.error('\nFix invalid Topic IDs, update topics.json, or create missing files.\n');
        throw new Error('Topic validation failed. Fix invalid Topic IDs, update topics.json, or create missing files.');
      } else {
        console.log('✅ All Topic IDs and paths are valid.');
      }
    },
  };
}
