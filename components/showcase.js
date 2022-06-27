import React from 'react';
import LinkWithArrow from './link-with-arrow';
import Image from 'next/image';

const Showcase = ({ showcases }) => (
  <div id="showcase">
    <div className="section-title section-title--no-logo">
      <h3>Application Showcase</h3>
      <p>
        Our frameworks work together to enable world-class user experiences.
      </p>
    </div>
    <div className="cases">
      {showcases.map((showcase) => (
        <Case key={showcase.name} {...showcase} image={showcase.image} />
      ))}
    </div>
  </div>
);

function Case({ description, image, label, name, url }) {
  return (
    <div className="case">
      <div className="frame">
        <div className="browser-bar">
          <div className="browser-bar-button" />
          <div className="browser-bar-button" />
          <div className="browser-bar-button" />
        </div>
        <Image src={image} width={590} height={369} />
      </div>
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <LinkWithArrow url={url} label={label} />
    </div>
  );
}

export default Showcase;
