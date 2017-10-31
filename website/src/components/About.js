import React from 'react'

import Footer from 'components/Footer'
import LinkWithArrow from 'components/LinkWithArrow'

function About() {
  return (
    <div id="About">
      <Intro />
      <News />
      <Footer />
    </div>
  )
}

const news = [
  {
    publication: 'Techcrunch',
    date: 'Aug 30, 2017',
    title: 'Uber Movement traffic data finally makes it out of beta',
    url:
      'https://techcrunch.com/2017/08/30/uber-movement-traffic-data-finally-makes-it-out-of-beta/',
    image: './images/news/movement.png',
  },
  {
    publication: 'Techcrunch',
    date: 'Aug 29, 2017',
    title: "Uber shows off its autonomous driving program's snazzy visualization tools",
    url:
      'https://techcrunch.com/2017/08/28/uber-shows-off-its-autonomous-driving-programs-snazzy-visualization-tools',
    image: './images/news/ocslite.png',
  },
  {
    publication: 'Uber Engineering Blog',
    date: 'Aug 31, 2017',
    title: "Uber's ride with the sun: tracking the 2017 solar eclipse",
    url: 'https://eng.uber.com/solar-eclipse/',
    image: './images/news/eclipse.png',
  },
  {
    publication: 'Uber Engineering Blog',
    date: 'July 25, 2017',
    title: "Visualize data sets on the web with Uber engineering's Deck.gl framework",
    url: 'https://eng.uber.com/deck-gl-framework/',
    image: './images/news/deckgl.png',
  },
  {
    publication: 'YouTube',
    date: 'Jan 20, 2017',
    title: 'Visualizing Data with deck.gl - Nicolas Garcia Belmonte',
    url: 'https://www.youtube.com/watch?v=HU1K7Vhfe-A',
    image: './images/news/nicotalk.png',
  },
]

export default About

function Intro() {
  return (
    <div id="intro">
      <div className="section-title">
        <h2>About us</h2>
        <p>
          We’re a team of software engineers, information designers, and computer graphics
          specialists at Uber.
        </p>
      </div>
      <div className="about--intro--pictures">
        <div className="about--intro--pictures--main">
          <div
            className="about--pic"
            style={{ backgroundImage: "url('./images/team/dinner.png')" }}
          />
          <p>{"Dinner at Shan's"}</p>
        </div>
      </div>
      <div className="section-title section-title--no-logo mission">
        <h2>Our mission</h2>
        <p>
          Enhance people’s ability to understand and communicate data through interactive systems
          for data visualization and analysis.
        </p>
      </div>
      <div className="about--intro--pictures">
        <div className="about--intro--pictures--small">
          <div
            className="about--pic"
            style={{ backgroundImage: "url('./images/team/bowling.png')" }}
          />
          <p>{'Bowling night'}</p>
        </div>
        <div className="about--intro--pictures--small">
          <div
            className="about--pic"
            style={{ backgroundImage: "url('./images/team/hiking.png')" }}
          />
          <p>{'Hiking Mt Tam'}</p>
        </div>
        <div className="m-top">
          <div
            className="about--pic"
            style={{
              backgroundImage: 'url("./images/team/museum.png")',
              height: 'calc((100vw - 71px) / 3.34)',
              maxHeight: 350,
            }}
          />
          <p>{'Family photo at the California Academy of Science'}</p>
        </div>
      </div>
      <div className="big-link">
        <LinkWithArrow label="Join our team!" url="https://www.uber.com/careers/list/20242/" />
      </div>
    </div>
  )
}

function News() {
  return (
    <div id="news">
      <div className="section-title">
        <h2>{'News & Events'}</h2>
        <p>{'Learn more about how our work is creating impact'}</p>
      </div>
      <div className="news-items">
        {news.map((d, i) => (
          <div key={i} className="news--item">
            <h3>{d.publication}</h3>
            <p className="news--item--date">{d.date}</p>
            <img
              className="news--item--image"
              src={d.image}
              width="470"
              height="279"
              alt={d.title}
            />
            <p className="news--item--title">{d.title}</p>
            <LinkWithArrow className="news--item--read" label="Read Article" url={d.url} />
          </div>
        ))}
      </div>
    </div>
  )
}
