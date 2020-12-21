import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FrameworkPane from './framework-pane';

const Modules = () => (
  <StaticQuery
    query={graphql`
      query {
        allReposYaml(filter: { type: { eq: "MODULE" } }) {
          edges {
            node {
              badges {
                badge
              }
              description
              id
              img
              name
              page
              type
              url
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div id="repos">
          <div className="section-title section-title--no-logo">
            <h2>Our Components</h2>
            <p>
              Smaller projects that have been created to solve everyday tasks.
            </p>
          </div>
          <div className="modules">
            {data.allReposYaml.edges.map(({ node }, i) => (
              <FrameworkPane key={i} {...node} />
            ))}
          </div>
        </div>
      );
    }}
  />
);

export default Modules;
