import React from 'react'
import LinkWithArrow from './LinkWithArrow'

const showCase = [
  {
    description:
      'Kepler.gl is a powerful web-based geospatial data analysis tool. Built on a high performance rendering engine and designed for large-scale data sets.',
    image: '/images/kepler-gl-contours.png',
    label: 'Visit Site',
    name: 'Kepler.gl',
    url: 'http://kepler.gl'
  },
  {
    description:
      'A free tool that shares dynamic insights about traffic and mobility in cities where Uber operates.',
    image: '/images/movement.png',
    label: 'Visit Site',
    name: 'Movement',
    url: 'https://movement.uber.com',
  },
  {
    description:
      'A platform that enables engineers and across ATG to quickly inspect, debug, and explore data collected by our self driving cars.',
    image: '/images/atg.png',
    label: 'Read more',
    name: 'Uber Advanced Technologies Group',
    url:
      'https://techcrunch.com/2017/08/28/uber-shows-off-its-autonomous-driving-programs-snazzy-visualization-tool',
  },
]

export default function Showcase() {
  return (
    <div id="showcase">
      <div className="section-title section-title--no-logo">
        <h3>Application Showcase</h3>
        <p>Our frameworks work together to enable world-class user experiences.</p>
      </div>
      <div className="cases">{showCase.map(d => <Case key={d.name} {...d} />)}</div>
    </div>
  )
}

function Case({ description, image, label, name, url }) {
  return (
    <div className="case">
      <div className="frame">
        <div className="browser-bar">
          <div className="browser-bar-button" />
          <div className="browser-bar-button" />
          <div className="browser-bar-button" />
        </div>
        <div className="case-image" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <LinkWithArrow url={url} label={label} />
    </div>
  )
}
