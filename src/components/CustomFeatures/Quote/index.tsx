import React, { useState, useEffect } from 'react';

interface QuoteProps {
  file: string;
  section: string;
}

const Quote: React.FC<QuoteProps> = ({ file, section }) => {
  const [QuoteComponent, setQuoteComponent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to load the content from the generated quote registry
        let quoteRegistry;
        try {
          quoteRegistry = await import('@site/src/generated/quotes-registry');
        } catch (importError) {
          // If registry doesn't exist, fall back to error
          throw new Error(`Quote registry not found. File: ${file}, Section: ${section}`);
        }

        const quoteKey = `${file}#${section}`;
        const QuoteComponentType = quoteRegistry.default[quoteKey];
        
        if (!QuoteComponentType) {
          throw new Error(`Quote not found for "${section}" in ${file}`);
        }
        
        setQuoteComponent(() => QuoteComponentType);
      } catch (err) {
        console.error(`Failed to load quote from "${file}", section "${section}":`, err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [file, section]);

  if (loading) {
    return <div>Loading quote content...</div>;
  }

  if (error) {
    return (
      <div style={{ 
        color: 'red', 
        border: '1px solid red', 
        padding: '10px', 
        borderRadius: '4px',
        backgroundColor: '#ffeaea'
      }}>
        <strong>Quote Error:</strong> {error}
      </div>
    );
  }

  if (!QuoteComponent) {
    return (
      <div style={{ 
        color: 'orange', 
        border: '1px solid orange', 
        padding: '10px', 
        borderRadius: '4px',
        backgroundColor: '#fff5e6'
      }}>
        Quote content not found: {file} → {section}
      </div>
    );
  }

  return (
    <div style={{
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      padding: '16px',
      backgroundColor: '#f9fafb',
      borderLeftWidth: '4px',
      borderLeftColor: '#3b82f6'
    }}>
      <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '8px' }}>
        Quoted from: <em>{file}</em> → <strong>{section}</strong>
      </div>
      <QuoteComponent />
    </div>
  );
};

export default Quote;