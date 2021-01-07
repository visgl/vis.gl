import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FrameworkPane from './framework-pane';
const FrameworkList = ({ starResolver, imageResolver }) => (
  <StaticQuery
    query={graphql`
      query {
        allReposYaml(filter: { type: { eq: "FRAMEWORK" } }) {
          edges {
            node {
              badges {
                badge
              }
              description
              ID
              img
              name
              owner
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
          <div className="section-title">
            <h2>The Frameworks</h2>
            <p>A suite of open-source visualization frameworks</p>
          </div>
          {data.allReposYaml.edges.map(({ node }, i) => (
            <FrameworkPane
              key={i}
              {...node}
              image={imageResolver[node.img]}
              stars={starResolver[node.ID] || 0}
            />
          ))}
        </div>
      );
    }}
  />
);

export default FrameworkList;
