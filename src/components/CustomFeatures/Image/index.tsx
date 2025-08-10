import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ImageList from './images.json';

interface ImageProps {
  id: keyof typeof ImageList;
  maxWidth: string;
  alt?: string;
}

function Image({ id, maxWidth, alt }: ImageProps) {
  const imagePath = ImageList[id] as string | undefined;
  
  if (!imagePath) {
    console.warn(`[Image] Unknown Image id "${id}"`);
    return (
      <img
        key={id}
        alt={alt || `Missing image: ${id}`}
        style={{ maxWidth: maxWidth, border: '2px dashed red' }}
      />
    );    
  }

  const imageUrl = useBaseUrl(imagePath);

  return (
    <img 
      key={id} // Force re-render when ID changes during development
      src={imageUrl} 
      loading="lazy"
      decoding="async"
      style={{maxWidth: maxWidth}} 
      alt={alt || `Image ${id}`}
      onError={(e) => {
        console.error(`Failed to load image: ${imageUrl}`);
        if (process.env.NODE_ENV != 'production') {
          e.currentTarget.style.border = '2px solid red';
        }
        e.currentTarget.alt = `Missing image: ${id}`;
      }}
    />
  );
}

export default Image;
