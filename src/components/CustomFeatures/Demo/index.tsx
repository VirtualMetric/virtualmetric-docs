import React, { useState } from 'react';
import demosConfig from '@site/demos.json';

interface DemoProps {
  id: string;
  height?: string;
  title?: string;
  mode?: 'inline' | 'fullpage';
  buttonText?: string;
}

const NAVATTIC_BASE_URL = 'https://capture.navattic.com/';
const DEFAULT_HEIGHT = '600px';

const Demo: React.FC<DemoProps> = ({
  id,
  height = DEFAULT_HEIGHT,
  title,
  mode = 'inline',
  buttonText = 'Launch Interactive Demo'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navatticId = demosConfig[id];

  if (!navatticId) {
    return (
      <div style={{ color: 'red', border: '1px solid red', padding: 10, borderRadius: 4 }}>
        Demo id "{id}" not found in demos.json
      </div>
    );
  }

  const embedUrl = `${NAVATTIC_BASE_URL}${navatticId}`;
  const demoTitle = title || `Interactive demo: ${id}`;

  // Fullpage mode: button trigger with overlay
  if (mode === 'fullpage') {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 500,
            color: '#fff',
            backgroundColor: '#4F46E5',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          {buttonText}
        </button>

        {isOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999999,
              backgroundColor: '#000',
            }}
          >
            <iframe
              src={embedUrl}
              style={{
                position: 'absolute',
                border: 'none',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              data-navattic-demo-id={navatticId}
              allow="fullscreen"
              title={demoTitle}
            />
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 1000000,
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Close Demo
            </button>
          </div>
        )}
      </>
    );
  }

  // Inline mode: embedded iframe (default)
  return (
    <div style={{ width: '100%', height }}>
      <iframe
        src={embedUrl}
        style={{ border: 'none', width: '100%', height: '100%' }}
        data-navattic-demo-id={navatticId}
        allow="fullscreen"
        title={demoTitle}
      />
    </div>
  );
};

export default Demo;
