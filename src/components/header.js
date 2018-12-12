import React, { Component } from 'react';
import classNames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';

import Menu from './menu';
import Links from './links';

export default class Header extends Component {
  state = {
    isMenuOpen: false,
  };
  toggleMenu = menuState => {
    this.setState({ isMenuOpen: menuState });
  };
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allLinksYaml {
              edges {
                node {
                  navigation {
                    type
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
          console.log(data);
          const { isMenuOpen } = this.state;
          return (
            <header
              className={classNames({
                open: isMenuOpen,
                [this.props.page]: true,
              })}
            >
              <div className="f container ph2">
                {data.allLinksYaml.edges.map(
                  (
                    {
                      node: {
                        navigation: { type, items },
                      },
                    },
                    idx
                  ) => {
                    switch (type) {
                      case 'MENU':
                        return (
                          <Menu
                            key={idx}
                            isMenuOpen={isMenuOpen}
                            items={items}
                            page={this.props.page}
                            toggleMenu={this.toggleMenu}
                          />
                        );
                      case 'LINKS':
                        return (
                          <Links
                            key={idx}
                            items={items}
                            page={this.props.page}
                          />
                        );
                      default:
                        return null;
                    }
                  }
                )}
              </div>
            </header>
          );
        }}
      />
    );
  }
}
