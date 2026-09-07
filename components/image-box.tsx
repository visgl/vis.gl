import React from 'react';

export type Props = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

const ImageBox = ({src, alt, width, height}: Props) => (
  <div style={{position: 'relative', display: 'block', width, height}}>
    <img style={{objectFit: 'contain', width: '100%', height: '100%'}} alt={alt} src={src} />
  </div>
);

export default ImageBox;
