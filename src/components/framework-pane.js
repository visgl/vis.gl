import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Odometer from 'react-odometerjs';
import { GoStar } from 'react-icons/go';

let Odometer = ({ value }) => <span>{value}</span>;
if (typeof window !== `undefined`) {
  Odometer = require('react-odometerjs').default;
}

export default class FrameworkPane extends Component {
  static defaultProps = {
    img: null,
    contentStyle: { bottom: '1rem', left: '1rem', right: '1rem' },
    titleStyle: { fontSize: '1rem' },
    contribs: null,
  };

  static propTypes = {
    url: PropTypes.string,
  };
  componentDidMount() {
    this.setState({stars: this.props.stars});
  }
  state = {
    active: false,
    stars: 0,
  };
  
  open = page => {
    const { url } = this.props;
    window.open(page || `https://github.com/${url}`, '_blank');
  };

  render() {
    const {
      badges,
      description,
      image,
      name,
      owner,
      page,
      type,
      url,
    } = this.props;
    const { stars } = this.state;
    if (type === 'FRAMEWORK') {
      return (
        <div className={classNames('Repo', 'big', 'opaque')}>
          <div style={{height: 40}}/>
          <div
            className="Repo-img"
            style={{ 
              background: `url(${image}) top center / cover no-repeat`,
              height: 300
            }}
            onClick={() => this.open(page)}
          >
            <div style={{height: 20}}/>
            <div className="Repo-github"
              style={{
                backgroundColor: '#FFFF',
                borderRadius: 10,
                marginRight: 40,
                marginLeft: 40
              }}>
              <div>
                <a href={page}>
                  <h1>{name} &nbsp; </h1>
                </a>                 
                <div className="badge" key={owner}>
                  {owner}
                </div>
                <br />
                {badges.map(({ badge }) => (
                  <div className="badge" key={badge}>
                    {badge}
                  </div>
                ))}
               <div className="Repo-border" style={{marginTop: -20}}>
                  <a href={`https://github.com/${url}`} className="link">
                    {'Github'}
                  </a>
                  <div className="Stars" onClick={() => this.open()}>
                    <GoStar />
                    <Odometer value={stars} options={{ format: '' }} />
                  </div>
                </div>
              </div>

              <div className="Repo-desc">{description}</div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Repo-github Repo small">
        <h1>{this.props.displayName || name}</h1>
        {badges.map(({ badge }) => (
          <div className="badge" key={badge}>
            {badge}
          </div>
        ))}
        <div className="Repo-desc">{description}</div>
        <div className="Repo-get-started">
          <a href={page} className="link">
            {'Get Started'}
          </a>
        </div>
      </div>
    );
  }
}
