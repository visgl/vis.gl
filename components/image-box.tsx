import Image from 'next/image';
import React from 'react';

export type Props = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

const ImageBox = ({src, alt, width, height}: Props) => (
  <div style={{position: 'relative', display: 'block', width, height}}>
    <Image layout="fill" objectFit="contain" alt={alt} src={src} />
  </div>
);

export default ImageBox;
