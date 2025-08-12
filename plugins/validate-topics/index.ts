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
          pathErrors.push(`❌ Topic ID '${id}' points to non-existent path '${topicPath}' (resolved to '${fullPath}')`);
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

        // Naive Topic match: <Topic id="some-id">
        const matches = [...content.matchAll(/<Topic\s+id=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`❌ Invalid Topic ID '${id}' in file: ${file}`);
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
