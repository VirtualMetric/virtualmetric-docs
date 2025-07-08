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

      // Read TopicLinks.json
      const topicLinks = JSON.parse(fs.readFileSync(topicsPath, 'utf-8'));
      const validIds = new Set(Object.keys(topicLinks));

      // Find all MDX files in the docs directory
      const mdxFiles = await glob('**/*.mdx', { cwd: docsDir, absolute: true });

      const errors: string[] = [];

      for (const file of mdxFiles) {
        const content = fs.readFileSync(file, 'utf-8');

        // Naive Topic match: <Topic id="some-id">
        const matches = [...content.matchAll(/<Topic\s+id=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`❌ Invalid Topic ID '${id}' in file: ${file}`);
          }
        }
      }

      if (errors.length > 0) {
        console.error('\nTopic Validation Errors:\n');
        errors.forEach(err => console.error(err));
        console.error('\nFix invalid Topic IDs or update topics.json.\n');
        process.exit(1); // Halt build
      } else {
        console.log('✅ All Topic IDs are valid.');
      }
    },
  };
}
