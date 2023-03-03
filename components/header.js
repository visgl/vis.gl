import React, {Component} from 'react';
import classNames from 'classnames';

import Menu from './menu';
import Links from './links';
import links from '../content/links.yaml';

export default class Header extends Component {
  state = {
    isMenuOpen: false
  };
  toggleMenu = menuState => {
    this.setState({isMenuOpen: menuState});
  };

  render() {
    const {isMenuOpen} = this.state;
    return (
      <header
        className={classNames({
          open: isMenuOpen,
          [this.props.page]: true
        })}
      >
        <div className="f container ph2">
          {links.map(({navigation: {type, items}}, idx) => {
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
                return <Links key={idx} items={items} page={this.props.page} />;
              default:
                return null;
            }
          })}
        </div>
      </header>
    );
  }
}
