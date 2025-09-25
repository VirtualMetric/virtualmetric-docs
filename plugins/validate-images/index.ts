import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';
import { validationConfig, reportValidationErrors, reportValidationSuccess } from '../shared/validation-config';

export default function validateImagesPlugin(context: LoadContext): Plugin<void> {
  return {
    name: 'validate-images',

    async loadContent() {
      const rootDir = context.siteDir;
      const imagesPath = path.join(rootDir, 'images.json');

      // Read images.json
      let images;
      try {
        images = JSON.parse(await fs.promises.readFile(imagesPath, 'utf-8'));
      } catch (error) {
        throw new Error(`Failed to read images.json: ${error instanceof Error ? error.message : String(error)}`);
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
          pathErrors.push(`The '${id}' ID in 'images.json' points to '${imagePath}' which does not exist!`);
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

        // Naive Image match: <Image id="some-id"
        const matches = [...content.matchAll(/<Image\s+id=["']([\w\-]+)["']/g)];

        for (const match of matches) {
          const id = match[1];
          if (!validIds.has(id)) {
            errors.push(`The '${id}' ID in '${relativePath}' does not exist in images.json!`);
          } else {
            // Check if the file exists for this image
            const imagePath = images[id];
            const relPath = imagePath.replace(/^\//, '');
            const fullPath = path.join(rootDir, 'static', relPath);
            try {
              await fs.promises.access(fullPath);
            } catch (error) {
              errors.push(`The '${id}' ID in '${relativePath}' points to '${imagePath}' which does not exist!`);
            }
          }
        }
      }

      // Combine both types of errors
      const allErrors = [...pathErrors, ...errors];

      if (allErrors.length > 0) {
        reportValidationErrors(
          allErrors,
          'Image',
          'Fix invalid Image IDs, update images.json, or add missing image files.'
        );
      } else {
        reportValidationSuccess('Image');
      }
    },
  };
}