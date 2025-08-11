import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ImageList from '@site/images.json';

interface ImageProps {
  id: keyof typeof ImageList;
  maxWidth?: React.CSSProperties['maxWidth'];
  alt?: string;
}

function Image({ id, maxWidth = '100%', alt }: ImageProps) {
  const imagePath = ImageList[id] as string | undefined;
  // Call hook unconditionally to satisfy Rules of Hooks
  const imageUrl = useBaseUrl(imagePath ?? '');

  if (!imagePath) {
    console.warn(`[Image] Unknown Image id "${id}"`);
    return (
      <img
        key={id}
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        alt={alt || `Missing image: ${id}`}
        style={{ maxWidth, border: '2px dashed red' }}
      />
    );    
  }

  // imagePath is defined here; imageUrl computed above

  return (
    <img 
      key={id} // Force re-render when ID changes during development
      src={imageUrl} 
      loading="lazy"
      decoding="async"
      style={{ maxWidth }} 
      alt={alt || `Image ${id}`}
      onError={(e) => {
        console.error(`Failed to load image: ${imageUrl}`);
        if (process.env.NODE_ENV !== 'production') {
          e.currentTarget.style.border = '2px solid red';
        }
        e.currentTarget.alt = `Missing image: ${id}`;
        // Prevent broken-image icon
        e.currentTarget.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
      }}
    />
  );
}

export default Image;
