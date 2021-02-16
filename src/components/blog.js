import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import LinkWithArrow from './link-with-arrow';

const Blog = ({ imageResolver }) => (
  <StaticQuery
    query={graphql`
      query {
        allBlogYaml {
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

        <div className="blog-items">
          {data.allBlogYaml.edges.map(({ node }) => (
            <BlogPost key={node.name} {...node} image={imageResolver[node.image]} />
          ))}
        </div>
      </div>)
    }}
  />
);

function BlogPost({ publication, date, image, title, url }) {
  return (
    <div className="blog--item">
      <span>
        <img
          className="blog--item--image"
          src={image}
          width="240"
          height="143"
          alt={title}
        />
        <div className="blog--item--textbox">
          <p className="blog--item--date">{date}</p>
          <p className="blog--item--title">{title}</p>
          <h3>Another riveting post from the vis.gl community!</h3>
          <LinkWithArrow
            className="blog--item--read"
            label="Read Article"
            url={url}
          />
        </div>
      </span>
    </div>
  );
}

export default Blog;
