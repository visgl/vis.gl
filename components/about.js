import React from 'react';

import LinkWithArrow from './link-with-arrow';

function About({ imageResolver = {} }) {
  return (
    <div id="About">
      <Intro imageResolver={imageResolver} />
    </div>
  );
}

export default About;

function Intro({ imageResolver}) {
  return (
    <div id="intro">
      <div className="section-title">
        <h2>About us</h2>
        <p>
          We are a team of software engineers, information designers, and
          computer graphics specialists at Uber.
        </p>
      </div>
      <div className="about--intro--pictures">
        <div className="about--intro--pictures--main">
          <div
            className="about--pic"
            style={{
              backgroundImage: `url(${imageResolver['team/dinner.png']}`,
            }}
          />
          <p>{"Dinner at Shan's"}</p>
        </div>
      </div>
      <div className="section-title section-title--no-logo mission">
        <h2>Our mission</h2>
        <p>
          Enhance people’s ability to understand and communicate data through
          interactive systems for data visualization and analysis.
        </p>
      </div>
      <div className="about--intro--pictures">
        <div className="about--intro--pictures--small">
          <div
            className="about--pic"
            style={{
              backgroundImage: `url(${imageResolver['team/bowling.png']}`,
            }}
          />
          <p>{'Bowling night'}</p>
        </div>
        <div className="about--intro--pictures--small">
          <div
            className="about--pic"
            style={{
              backgroundImage: `url(${imageResolver['team/hiking.png']}`,
            }}
          />
          <p>{'Hiking Mt Tam'}</p>
        </div>
        <div className="m-top">
          <div
            className="about--pic"
            style={{
              backgroundImage: `url(${imageResolver['team/museum.png']}`,
              height: 'calc((100vw - 71px) / 3.34)',
              maxHeight: 350,
            }}
          />
          <p>{'Family photo at the California Academy of Science'}</p>
        </div>
      </div>
      <div className="big-link">
        <LinkWithArrow
          label="Join our team!"
          url="https://www.uber.com/careers/list/13203/"
        />
      </div>
    </div>
  );
}
