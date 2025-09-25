import React, { useState, useEffect } from 'react';
import includesConfig from '@site/includes.json';

interface IncludeProps { id: string }

// Create a webpack context for all MDX files in src/includes (non-recursive is enough here)
// This is statically analyzable so webpack will not emit the critical dependency warning.
// It still enables lazy loading (code-splitting) per include.
// Maintenance:
//   1. Add new .mdx file under src/includes
//   2. Add its entry to includes.json (id -> filename.mdx)
//   3. Use <Include id="that-id" /> in any doc
// No code changes here required unless you add subdirectories.
// If you add nested folders, set the 2nd arg (useSubdirectories) to true and update includes.json paths.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const includesContext = require.context('@site/src/includes', false, /\.mdx$/);

// Simple runtime cache to avoid repeat context resolutions for same file
const includeCache: Record<string, React.ComponentType<any>> = {};

const loadIncludeComponent = async (fileName: string): Promise<React.ComponentType<any> | null> => {
  if (includeCache[fileName]) return includeCache[fileName];
  try {
    // require.context returns a synchronous module loader; wrap for consistency
    const mod = includesContext(`./${fileName}`);
    const comp = mod.default || null;
    if (comp) includeCache[fileName] = comp;
    return comp;
  } catch (e) {
    console.warn(`Include file not found in context: ${fileName}`);
    return null;
  }
};

const Include: React.FC<IncludeProps> = ({ id }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setError(null);
      setComponent(null);
      const fileName = includesConfig[id];
      if (!fileName) {
        setError(`Include id "${id}" not found in includes.json`);
        return;
      }
      const comp = await loadIncludeComponent(fileName);
      if (!cancelled) {
        if (comp) setComponent(() => comp); else setError(`Include file '${fileName}' missing for id "${id}"`);
      }
    };
    run();
    return () => { cancelled = true; };
  }, [id]);

  if (error) {
    return <div style={{ color: 'red', border: '1px solid red', padding: 10, borderRadius: 4 }}>{error}</div>;
  }
  if (!Component) {
    return <div style={{ opacity: 0.7 }}>Loading include…</div>;
  }
  return <Component />;
};

export default Include;
