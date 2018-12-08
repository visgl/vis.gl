import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const PROJECTS = [];

const links = [
  {
    label: "Frameworks",
    items: Object.entries(PROJECTS).map(d => ({ label: d[0], url: d[1] }))
  },
  {
    label: "Navigation",
    items: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "In The News", url: "/inthenews" }
      // {label: 'Blog', url: '/blog'}
    ]
  }
];

export default function Footer() {
  return (
    <footer id="Footer">
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-64694404-17"
        />
        <script>
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-64694404-17');`}
        </script>
      </Helmet>
      <div className="content">
        <div className="main">
          <h1>
            <Link to="/">{"VIS.GL"}</Link>
          </h1>
          <p>
            The Visualization Suite is brought to you by the Uber Visualization
            team. We re always looking for talent to do great work, so do not
            hesitate to get in touch!
          </p>
        </div>
        {links.map(d => (
          <div className="links" key={d.label}>
            <div className="label">{d.label}</div>
            <ul>
              {d.items.map(i => (
                <li key={i.label}>
                  {d.label === "Navigation" ? (
                    <Link to={i.url}>{i.label}</Link>
                  ) : (
                    <a href={i.url}>{i.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
