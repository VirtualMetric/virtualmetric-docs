import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ImageList from './images.json';

interface ImageProps {
  id: keyof typeof ImageList;
  width: string;
  alt?: string;
}

function Image({ id, width, alt }: ImageProps) {
  const imagePath = ImageList[id];
  const imageUrl = useBaseUrl(imagePath);

  return (
    <img 
      key={id} // Force re-render when ID changes during development
      src={imageUrl} 
      style={{maxWidth: width}} 
      alt={alt || `Image ${id}`}
      onError={(e) => {
        console.error(`Failed to load image: ${imageUrl}`);
        e.currentTarget.style.border = '2px solid red';
        e.currentTarget.alt = `Missing image: ${id}`;
      }}
    />
  );
}

export default Image;
