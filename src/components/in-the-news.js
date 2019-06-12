import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import LinkWithArrow from './link-with-arrow';

const InTheNews = ({ imageResolver }) => (
  <StaticQuery
    query={graphql`
      query {
        allNewsYaml {
          edges {
            node {
              date
              title
              url
              image
              publication
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data, imageResolver);
      return (
      <div id="news">
        <div className="section-title">
          <h2>{'News & Events'}</h2>
          <p>{'Learn more about how our work is creating impact'}</p>
        </div>

        <div className="news-items">
          {data.allNewsYaml.edges.map(({ node }) => (
            <News key={node.name} {...node} image={imageResolver[node.image]} />
          ))}
        </div>
      </div>)
    }}
  />
);

function News({ publication, date, image, title, url }) {
  return (
    <div className="news--item">
      <h3>{publication}</h3>
      <p className="news--item--date">{date}</p>
      <img
        className="news--item--image"
        src={image}
        width="470"
        height="279"
        alt={title}
      />
      <p className="news--item--title">{title}</p>
      <LinkWithArrow
        className="news--item--read"
        label="Read Article"
        url={url}
      />
    </div>
  );
}

export default InTheNews;
