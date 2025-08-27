import path from 'path';
import glob from 'fast-glob';

/**
 * Centralized validation configuration for all validation plugins.
 * This ensures consistent directory scanning and path handling across
 * validate-includes, validate-topics, and validate-images plugins.
 */
export interface ValidationConfig {
  /** Directories to scan for MDX files (relative to site root) */
  scanDirectories: string[];
  /** Get relative path for error reporting */
  getRelativePath: (rootDir: string, filePath: string) => string;
  /** Get all MDX files from all configured directories */
  getAllMdxFiles: (rootDir: string) => Promise<string[]>;
}

export const validationConfig: ValidationConfig = {
  // Single source of truth for which directories contain MDX files
  // that may have Topic, Image, Include, or Quote component references
  scanDirectories: ['docs', 'src/includes'],
  
  /**
   * Get relative path for cleaner error messages.
   * Determines which base directory the file belongs to and returns
   * the relative path from that directory.
   */
  getRelativePath: (rootDir: string, filePath: string): string => {
    const docsDir = path.join(rootDir, 'docs');
    const srcIncludesDir = path.join(rootDir, 'src', 'includes');
    
    return filePath.startsWith(docsDir) 
      ? path.relative(docsDir, filePath)
      : path.relative(srcIncludesDir, filePath);
  },
  
  /**
   * Get all MDX files from all configured scan directories.
   * Returns absolute paths for consistent processing.
   */
  getAllMdxFiles: async (rootDir: string): Promise<string[]> => {
    const mdxFiles: string[] = [];
    
    for (const dir of validationConfig.scanDirectories) {
      const dirPath = path.join(rootDir, dir);
      try {
        const files = await glob('**/*.mdx', { cwd: dirPath, absolute: true });
        mdxFiles.push(...files);
      } catch (error) {
        // Directory might not exist (e.g., in some configurations)
        // This is not necessarily an error, so we continue silently
        console.warn(`Warning: Could not scan directory ${dir}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    
    return mdxFiles;
  }
};

/**
 * Utility function for consistent error reporting across all validation plugins.
 * 
 * @param errors - Array of error messages
 * @param validationType - Type of validation (e.g., 'Include', 'Topic', 'Image')
 * @param fixInstructions - Instructions for fixing the errors
 */
export function reportValidationErrors(
  errors: string[], 
  validationType: string, 
  fixInstructions: string
): never {
  console.error(`\n${validationType} Validation Errors:\n`);
  errors.forEach(err => console.error(err));
  console.error(`\n${fixInstructions}\n`);
  throw new Error(`${validationType} validation failed. ${fixInstructions}`);
}

/**
 * Utility function for consistent success reporting across all validation plugins.
 * 
 * @param validationType - Type of validation (e.g., 'Include', 'Topic', 'Image') 
 * @param additionalInfo - Additional success information (optional)
 */
export function reportValidationSuccess(validationType: string, additionalInfo?: string): void {
  const message = additionalInfo 
    ? `✅ All ${validationType} IDs, paths, and ${additionalInfo} are valid.`
    : `✅ All ${validationType} IDs and paths are valid.`;
  console.log(message);
}