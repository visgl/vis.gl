import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cx from "classnames";

import { toggleMenu } from "reducers/ui";

const links = [
  { url: "/about", label: "About" },
  { url: "https://medium.com/@vis.gl", external: "true", label: "Blog" },
  { url: "/inthenews", label: "In The News" }
];

@connect(
  ({ ui: { isMenuOpen }, router: { location: { pathname } } }) => ({
    isMenuOpen,
    pathname
  }),
  {
    toggleMenu
  }
)
class Header extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.pathname === nextProps.pathname) {
      return;
    }
    this.props.toggleMenu(false);
  }

  render() {
    const { pathname, isMenuOpen } = this.props;

    return (
      <header
        className={cx({
          open: isMenuOpen,
          [pathname.slice(1) || "home"]: true
        })}
      >
        <div className="f container ph2">
          <h1 className="fg">
            <Link to="/">{"VIS.GL"}</Link>
          </h1>
          <div className="links f">
            {links.map(
              link =>
                link.external ? (
                  <a href={link.url} key={link.url}>
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.url}
                    className={cx({ active: pathname.includes(link.url) })}
                    key={link.url}
                  >
                    {link.label}
                  </Link>
                )
            )}
          </div>
          <div
            className="menu-toggle"
            onClick={() => this.props.toggleMenu(!isMenuOpen)}
          >
            <i className={`icon icon-${isMenuOpen ? "close" : "menu"}`} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
