// Type declarations for webpack's require.context used in Include component
// This allows TypeScript to understand the non-standard require.context API

declare interface WebpackRequire extends NodeRequire {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
    mode?: 'sync' | 'eager' | 'lazy' | 'lazy-once' | 'weak'
  ): {
    (id: string): any;
    keys(): string[];
    resolve(id: string): string;
    id: string;
  };
}

declare const require: WebpackRequire;
