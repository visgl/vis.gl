import React from 'react';
import LinkWithArrow from './link-with-arrow';
import { StaticQuery, graphql } from 'gatsby';

const Showcase = ({ imageResolver }) => (
  <StaticQuery
    query={graphql`
      query {
        allShowcaseYaml {
          edges {
            node {
              name
              label
              description
              image
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div id="showcase">
        <div className="section-title section-title--no-logo">
          <h3>Application Showcase</h3>
          <p>
            Our frameworks work together to enable world-class user experiences.
          </p>
        </div>
        <div className="cases">
          {data.allShowcaseYaml.edges.map(({ node }) => (
            <Case key={node.name} {...node} image={imageResolver[node.image]} />
          ))}
        </div>
      </div>
    )}
  />
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
        <div
          className="case-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <LinkWithArrow url={url} label={label} />
    </div>
  );
}

export default Showcase;
