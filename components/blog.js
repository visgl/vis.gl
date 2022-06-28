import React from 'react';
import LinkWithArrow from './link-with-arrow';
import blogYaml from '../content/blog.yaml';
import ImageBox from './image-box';

const Blog = () => {
  return (
    <div id="news">
      <div className="section-title">
        <h2>vis.gl Blog</h2>
        <p>Deep dives into the vis.gl frameworks</p>
      </div>
      <div className="section-text">
        <p>
          The vis.gl blog introduces new releases, provides in-depth technical
          expositions and showcases applications of the vis.gl frameworks. Guest
          posts are welcome!
        </p>
        <br />
        <p>
          Note that vis.gl blog posts can also be browser directly on{' '}
          <a href="https://medium.com/@vis.gl">Medium</a>.
        </p>
      </div>

      <div className="section-text">
        <div className="blog-items">
          {blogYaml.map((entry, i) => (
            <BlogPost key={i} {...entry} image={entry.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

function BlogPost({ publication, date, image, title, blurb, url }) {
  return (
    <div className="blog--item">
      <span>
        <div className="blog--item--image">
          <ImageBox src={image} width={240} height={143} alt={title} />
        </div>
        <div className="blog--item--textbox">
          <p className="blog--item--title">{title}</p>
          <p className="blog--item--date">{date}</p>
          <h3>{blurb}</h3>
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
