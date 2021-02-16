import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import LinkWithArrow from './link-with-arrow';

const Blog = ({ imageResolver }) => (
  <StaticQuery
    query={graphql`
      query {
        blogYaml {
          edges {
            node {
              date
              title
              url
              image
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
          <h2>{'vis.gl Blog'}</h2>
          <p>{'Applications of and deep dives into the vis.gl frameworks.'}</p>
        </div>

        <div className="news-items">
          {data.blogYaml.edges.map(({ node }) => (
            <BlogPost key={node.name} {...node} image={imageResolver[node.image]} />
          ))}
        </div>
      </div>)
    }}
  />
);

function BlogPost({ publication, date, image, title, url }) {
  return (
    <div className="news--item">
      <h3>{title}</h3>
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

export default Blog;
