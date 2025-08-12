import React, { useState, useEffect } from 'react';
import includesConfig from '@site/includes.json';

interface IncludeProps {
  id: string;
}

// @ts-ignore
const context = require.context('@site/src/includes', false, /\.(mdx|tsx)$/);

const Include: React.FC<IncludeProps> = ({ id }) => {
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = () => {
      try {
        setLoading(true);
        setError(null);

        const includePath = includesConfig[id];
        if (!includePath) {
          throw new Error(`Include content with ID "${id}" not found in includes.json`);
        }

        const module = context(`./${includePath}`);
        setContent(() => module.default);
      } catch (err) {
        console.error(`Failed to load include content "${id}":`, err);
        setError(`Failed to load include content "${id}"`);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [id]);

  if (loading) {
    return <div>Loading include content...</div>;
  }

  if (error) {
    return (
      <div style={{ color: 'red', border: '1px solid red', padding: '10px', borderRadius: '4px' }}>
        Error: {error}
      </div>
    );
  }

  if (!Content) {
    return (
      <div style={{ color: 'orange', border: '1px solid orange', padding: '10px', borderRadius: '4px' }}>
        Include content "{id}" not found
      </div>
    );
  }

  return <Content />;
};

export default Include;
