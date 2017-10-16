import React from 'react'

import LinkWithArrow from './LinkWithArrow';

function About() {
  return <div id="About">
    <Intro />
    <News />
    </div>
}

const news = [{
  publication: 'Techcrunch',
  date: 'Aug 30, 2017',
  title: 'Uber Movement traffic data finally makes it out of beta',
  url: 'https://techcrunch.com/2017/08/30/uber-movement-traffic-data-finally-makes-it-out-of-beta/',
  image: './images/news/movement.png'
}, {
  publication: 'Techcrunch',
  date: 'Aug 29, 2017',
  title: 'Uber shows off its autonomous driving program\'s snazzy visualization tools',
  url: 'https://techcrunch.com/2017/08/28/uber-shows-off-its-autonomous-driving-programs-snazzy-visualization-tools/',
  image: './images/news/ocslite.png'
}, {
  publication: 'Uber Engineering Blog',
  date: 'Aug 31, 2017',
  title: 'Uber\'s ride with the sun: tracking the 2017 solar eclipse',
  url: 'https://eng.uber.com/solar-eclipse/',
  image: './images/news/eclipse.png'
}, {
  publication: 'Uber Engineering Blog',
  date: 'July 25, 2017',
  title: 'Visualize data sets on the web with Uber engineering\'s Deck.gl framework',
  url: 'https://eng.uber.com/deck-gl-framework/',
  image: './images/news/deckgl.png'
}, {
  publication: 'YouTube',
  date: 'Jan 20, 2017',
  title: 'Visualizing Data with deck.gl - Nicolas Garcia Belmonte',
  url: 'https://www.youtube.com/watch?v=HU1K7Vhfe-A',
  image: './images/news/nicotalk.png'
}];

export default About;

function Intro() {
  return (<div id="intro">
    <div className="section-title">
      <h3>About us</h3>
      <p style={{maxWidth: 1000}}>We’re a team of software engineers, information designers, and computer graphics specialists at Uber.</p>
    </div>
    <div className="about--intro--pictures">
      <div className="about--intro--pictures--main">
        <img src="./images/team/dinner.png" alt="Dinner at Shan's"/>
        <p>{'Dinner at Shan\'s'}</p>
      </div>
    </div>
    <div className="section-title section-title--no-logo">
      <h3>Our mission</h3>
      <p>Enhance people’s ability to understand and communicate data through interactive systems for data visualization and analysis.</p>
    </div>
    <div className="about--intro--pictures">
      <div className="about--intro--pictures--small">
        <img src="./images/team/bowling.png" alt="Bowling night"/>
        <p>{'Bowling night'}</p>
      </div>
      <div className="about--intro--pictures--small">
        <img src="./images/team/hiking.png" alt="Hiking Mt Tam"/>
        <p>{'Hiking Mt Tam'}</p>
      </div>
      <div className="about--intro--pictures--main">
        <img src="./images/team/museum.png" alt="Family photo"/>
        <p>{'Family photo at the California Academy of Science'}</p>
      </div>
    </div>
    <div className="Join">
      <LinkWithArrow label="Join our team!" url="https://www.uber.com/careers/list/20242/" />
    </div>
  </div>);
}

function News() {
  return (<div id="news">
    <div className="section-title">
      <h3>News & Events</h3>
      <p>Learn more about how our work is creating impact</p>
    </div>
    <div className="news-items">
      {news.map((d, i) => (<div key={i} className="news--item"
        onClick={() => window.open(d.url, '_blank')}
      >
        <h3>{d.publication}</h3>
        <p className="news--item--date">{d.date}</p>
        <p className="news--item--title">{d.title}</p>
        <LinkWithArrow className="news--item--read" label="Read Article" url={d.url} />
        <img className="news--item--image" src={d.image} width="470" height="279" alt={d.title} />
      </div>))}
    </div>
  </div>);
}
