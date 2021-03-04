import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allLinksYaml {
            edges {
              node {
                navigation {
                  type
                  title
                  items {
                    item {
                      active
                      label
                      url
                      route
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <footer id="Footer">
            <div className="content">
              <div className="main">
                <h1>
                  <Link className="logo" to="/">{'VIS.GL'}</Link>
                </h1>
                <p>
                  The vis.gl framework suite is an open governance collaboration 
                  under the auspices of the UCF and Linux Foundation. 
                </p>
              </div>
            </div>
          </footer>
        );
      }}
    />
  );
}

/*
              {
            /*
              <div className="links">
                <a href="https://www.linuxfoundation.org//">
                  <img
                    height="40"
                    src={imageResolver['logos/linux-foundation.svg']}
                  />
                </a>
              </div>
              <div className="links">
                <a href="https://uc.foundation/">
                  <img height="40" src={imageResolver['logos/ucf-color-hztl.svg']} />
                </a>
              </div>
              {data.allLinksYaml.edges.map(({node: {navigation}}) => (
                <div className="links" key={navigation.title}>
                  <div className="label">{navigation.title}</div>
                  <ul>
                  {navigation.items.map(({item}) => (
                      <li key={item.label}>
                        {item.route ? (
                          <Link to={item.route}>{item.label}</Link>
                        ) : (
                          <a href={item.url}>{item.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              */
            
