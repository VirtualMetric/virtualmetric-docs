import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import glob from 'fast-glob';

export default function validateImagesPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-images',

    async loadContent() {
      const rootDir = context.siteDir;
      const docsDir = path.join(rootDir, 'docs');
      const imagesPath = path.join(rootDir, 'images.json');

      // Read images.json
      let images;
      try {
        images = JSON.parse(await fs.promises.readFile(imagesPath, 'utf-8'));
      } catch (error) {
        throw new Error(`Failed to read images.json: ${error.message}`);
      }
      const validIds = new Set(Object.keys(images));

      // Validate that all paths in images.json point to existing files
      const pathErrors: string[] = [];
      for (const [id, imagePath] of Object.entries(images)) {
        // Convert image path to file system path (images are in static/ directory)
        // Strip leading "/" so path.join doesn't drop the preceding segments
        const relPath = (imagePath as string).replace(/^\//, '');
        const fullPath = path.join(rootDir, 'static', relPath);
        
        try {
          await fs.promises.access(fullPath);
        } catch (error) {
          pathErrors.push(`The ${id} in images.json points to ${imagePath} which does not exist!`);
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

        // Naive Image match: <Image id="some-id"
        const matches = [...content.matchAll(/<Image\s+id=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            // Check if the id exists in images.json but points to a non-existent file
            if (images[id]) {
              const imagePath = images[id];
              const relPath = imagePath.replace(/^\//, '');
              const fullPath = path.join(rootDir, 'static', relPath);
              
              try {
                await fs.promises.access(fullPath);
                // If we reach here, the file exists but the ID validation failed for some other reason
                errors.push(`The ${id} in ${relativePath} does not exist!`);
              } catch (error) {
                // The file the image points to doesn't exist
                errors.push(`The ${id} in ${relativePath} points to ${imagePath} which does not exist!`);
              }
            } else {
              // The id doesn't exist in images.json at all
              errors.push(`The ${id} in ${relativePath} does not exist!`);
            }
          }
        }
      }

      // Combine both types of errors
      const allErrors = [...pathErrors, ...errors];

      if (allErrors.length > 0) {
        console.error('\nImage Validation Errors:\n');
        allErrors.forEach(err => console.error(err));
        console.error('\nFix invalid Image IDs, update images.json, or add missing image files.\n');
        throw new Error('Image validation failed. Fix invalid Image IDs, update images.json, or add missing image files.');
      } else {
        console.log('✅ All Image IDs and paths are valid.');
      }
    },
  };
}