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
                  <Link to="/">{'VIS.GL'}</Link>
                </h1>
                <p>
                  The vis.gl framework suite is an open governance collaboration 
                  under the auspices of the UCF and Linux Foundation. 
                  We are always looking for talent to help us do
                  great work, so do not hesitate to get in touch!
                </p>
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
            </div>
          </footer>
        );
      }}
    />
  );
}
