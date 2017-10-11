import React from 'react';

const showCase = [
{
  description: 'A free tool that shares dynamic insights about traffic and mobility in cities where Uber operates.',
  image: '/images/movement.png',
  label: 'Visit Site',  
  name: 'Movement',
  url: '#'
}, {
  description: 'A platform that enables engineers and across ATG to quickly inspect, debug, and explore data collected by our self driving cars.',
  image: '/images/atg.png',
  label: 'Read more',
  name: 'Uber Advanced Technologies Group',
  url: '#'
}];

export default function Showcase() {
  return (<div id="showcase">
    <div className="section-title section-title--no-logo">
      <h2>Application Showcase</h2>
      <p>Our frameworks work together to enable world-class user experiences.</p>
    </div>
    <div className="cases">
      {showCase.map(d => <Case key={d.name} {...d} />)}
    </div>
  </div>);
}

function Case({
  description,
  image,
  label,
  name,
  url
}) {
  return (<div className="case">
    <div className="frame">
      <div className="browser-bar">
        <div className="browser-bar-button" />
        <div className="browser-bar-button" />
        <div className="browser-bar-button" />
      </div>
      <img src={image} alt={description} />
    </div>
    <h1>{name}</h1>
    <p className="description">{description}</p>
    <a href={url} target="_blank">
      {label}
      <Arrow />
    </a>
  </div>)
}

function Arrow() {
  return (<svg className="arrow" width="21" height="13" viewBox="0 0 21 13" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8 5.143H0v1.714h17.14l-4.283 4.283 1.2 1.2 5.998-5.997-.173-.172.173-.172L14.058 0l-1.2 1.2 3.94 3.943z"
    fill="currentColor"
    fillRule="evenodd"
    />
  </svg>);
}