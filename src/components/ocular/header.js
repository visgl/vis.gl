import React, { Component } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import { graphql } from 'gatsby'

import Menu from './menu'
import Links from './links'

export default (
  {data, ...props}
) => {
    
    console.log(data, props);
    const isMenuOpen = false;
    const isHome = false;
    return (
      <header
        classname={classNames({
          open: isMenuOpen,
          home: isHome,
        })}
      >
        <div classname="f container ph2">
          {/* {data.allLinksYaml.edges.map(({ type, items }, i) => {
            switch (type) {
              case 'menu':
                return (
                  <Menu
                    key={i}
                    isMenuOpen={isMenuOpen}
                    items={items}
                    toggleMenu={toggleMenu}
                  />
                )
              case 'links':
                return <Links key={i} items={items} />
              default:
                return null
            }
          })} */}
        </div>
      </header>
    )
  }


export const query = graphql`
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
`
