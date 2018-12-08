import React from "react";

import Footer from "./Footer";
import LinkWithArrow from "./LinkWithArrow";

export default function InTheNews() {
  return (
    <div id="InTheNews">
      <News />
      <Footer />
    </div>
  );
}

const news = [
  {
    publication: "Meetup",
    date: "Apr 3, 2018",
    title: "Form and Content: Constructing Meaningful Visualizations",
    url: "https://www.meetup.com/UberEvents/events/248973146/",
    image: "./images/news/meetup.png"
  },
  {
    publication: "Meetup",
    date: "Oct 26, 2017",
    title: "Hello data! How to design visualizations for humans",
    url:
      "https://www.meetup.com/Uber-Engineering-Events-New-York/events/244112935/",
    image: "./images/news/meetup.png"
  },
  {
    publication: "Techcrunch",
    date: "Aug 30, 2017",
    title: "Uber Movement traffic data finally makes it out of beta",
    url:
      "https://techcrunch.com/2017/08/30/uber-movement-traffic-data-finally-makes-it-out-of-beta/",
    image: "./images/news/movement.png"
  },
  {
    publication: "Techcrunch",
    date: "Aug 28, 2017",
    title:
      "Uber shows off its autonomous driving program’s snazzy visualization tools",
    url:
      "https://techcrunch.com/2017/08/28/uber-shows-off-its-autonomous-driving-programs-snazzy-visualization-tools/",
    image: "./images/news/ocslite.png"
  },
  {
    publication: "Uber Engineering Blog",
    date: "Aug 28, 2017",
    title:
      "Engineering Uber’s Self-Driving Car Visualization Platform for the Web",
    url: "https://eng.uber.com/atg-dataviz/",
    image: "./images/news/atgdataviz.png"
  },
  {
    publication: "Meetup",
    date: "Aug 31, 2017",
    title: "A Journey Through Space and Time",
    url:
      "https://www.meetup.com/Uber-Engineering-Events-Seattle/events/242258284/",
    image: "./images/news/meetup.png"
  },
  {
    publication: "Techcrunch",
    date: "Apr 6, 2017",
    title: "Uber’s open source data visualization tool now goes beyond maps",
    url:
      "https://techcrunch.com/2017/04/06/ubers-open-source-data-visualization-tool-now-goes-beyond-maps/",
    image: "./images/news/opensource.png"
  },
  // {
  //   publication: "Uber Engineering Blog",
  //   date: "Apr 6, 2017",
  //   title:
  //     "Open Sourcing deck.gl 4.0: Uber Engineering’s Framework for Advanced Data Visualization",
  //   url: "https://eng.uber.com/deck-gl-4-0/",
  //   image: "./images/news/deckgl4.png"
  // },
  {
    publication: "Techcrunch",
    date: "Jan 29, 2017",
    title: "Uber crosses the 5 billion trip milestone amid ongoing issues",
    url:
      "https://techcrunch.com/2017/06/29/uber-crosses-the-5-billion-trip-milestone-amid-ongoing-issues/",
    image: "./images/news/5billion.png"
  },
  {
    publication: "YouTube",
    date: "Jan 20, 2017",
    title: "Visualizing Data with deck.gl - Nicolas Garcia Belmonte",
    url: "https://www.youtube.com/watch?v=HU1K7Vhfe-A",
    image: "./images/news/nicotalk.png"
  },
  {
    publication: "Meetup",
    date: "Jun 20, 2017",
    title: "Building Applications to Explore Geospatial Data",
    url: "https://www.meetup.com/UberEvents/events/240669911/",
    image: "./images/news/meetup.png"
  },
  // {
  //   publication: "Techcrunch",
  //   date: "Jan 8, 2017",
  //   title:
  //     "Uber debuts Movement, a new website offering access to its traffic data",
  //   url:
  //     "https://techcrunch.com/2017/01/08/uber-debuts-movement-a-new-website-offering-access-to-its-traffic-data/",
  //   image: "./images/news/movementdebut.png"
  // },
  {
    publication: "Business Insider",
    date: "Jan 8, 2017",
    title:
      "Uber is finally giving cities a slice of data they've been clamoring for",
    url:
      "http://www.businessinsider.com/uber-releases-trip-data-to-public-with-movement-2017-1",
    image: "./images/news/movementdebut.png"
  },
  {
    publication: "YouTube",
    date: "Dec 29, 2016",
    title: "Uber Engineering: Data Visualization at Uber",
    url: "https://www.youtube.com/watch?v=nLy3OQYsXWA&t=409s",
    image: "./images/news/uberengtalk.png"
  },
  {
    publication: "Uber Engineering Blog",
    date: "Nov 10, 2016",
    title:
      "Visualize Data Sets on the Web with Uber Engineering’s deck.gl Framework",
    url: "https://eng.uber.com/deck-gl-framework/",
    image: "./images/news/deckglframework.png"
  },
  {
    publication: "Scale Conference",
    date: "Sep 2, 2016",
    title: "Uber’s data visualization stack",
    url: "https://atscaleconference.com/videos/ubers-data-visualization-stack/",
    image: "./images/news/scale.png"
  },
  {
    publication: "Uber Engineering Blog",
    date: "May 3, 2016",
    title: "Engineering Intelligence Through Data Visualization at Uber",
    url: "https://eng.uber.com/data-viz-intel/",
    image: "./images/news/datavizintel.png"
  }
];

function News() {
  return (
    <div id="news">
      <div className="section-title">
        <h2>{"News & Events"}</h2>
        <p>{"Learn more about how our work is creating impact"}</p>
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
            <LinkWithArrow
              className="news--item--read"
              label="Read Article"
              url={d.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
