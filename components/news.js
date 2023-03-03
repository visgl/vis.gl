import React from 'react';
import newsYaml from '../content/news.yaml';

import LinkWithArrow from './link-with-arrow';
import ImageBox from './image-box';

const News = () => {
  return (
    <div id="news">
      <div className="section-title">
        <h2>{'News & Events'}</h2>
        <p>{'Learn about how vis.gl is creating impact'}</p>
      </div>

      <div className="section-text">
        <div className="news-items">
          {newsYaml.map((item, i) => (
            <NewsEntry key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

function NewsEntry({publication, date, image, title, url}) {
  return (
    <div className="news--item">
      <h3>{publication}</h3>
      <p className="news--item--date">{date}</p>
      <div className="news--item--image">
        <ImageBox src={image} width={240} height={143} alt={title} />
      </div>
      <p className="news--item--title">{title}</p>
      <LinkWithArrow className="news--item--read" label="Read Article" url={url} />
    </div>
  );
}

export default News;
