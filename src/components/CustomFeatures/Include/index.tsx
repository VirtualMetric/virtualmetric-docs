import React, { useState, useEffect } from 'react';
import reusablesConfig from './reusables.json';

interface IncludeProps {
  id: string;
}

const Include: React.FC<IncludeProps> = ({ id }) => {
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const reusablePath = reusablesConfig[id];
        if (!reusablePath) {
          throw new Error(`Reusable content with ID "${id}" not found in reusables.json`);
        }

        const module = await import(`@site/src/reusables/${reusablePath}`);
        setContent(() => module.default);
      } catch (err) {
        console.error(`Failed to load reusable content "${id}":`, err);
        setError(`Failed to load reusable content "${id}"`);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [id]);

  if (loading) {
    return <div>Loading reusable content...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', border: '1px solid red', padding: '10px', borderRadius: '4px' }}>
      Error: {error}
    </div>;
  }

  if (!Content) {
    return <div style={{ color: 'orange', border: '1px solid orange', padding: '10px', borderRadius: '4px' }}>
      Reusable content "{id}" not found
    </div>;
  }

  return <Content />;
};

export default Include;