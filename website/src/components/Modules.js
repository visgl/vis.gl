import React, {Component} from 'react';
import { connect } from 'react-redux'
import Repo from './Repo';
import { fetchRepos } from 'actions/github'

const modules = [{
  name: 'ocular',
  desc: 'A framework for the frameworks. This is the tool that generates the beautiful websites used by the frameworks in this suite.',
  badges: ['javascript']

}, {
  name: 'math.gl',
  desc: 'A compact, modern, and well documented library targeting the needs of 3D graphics.',
  badges: ['react-first'],
}, {
  name: 'mjolnir.js',
  desc: 'Management of browser events and gestures in a portable, modern way.',
  badges: ['javascript'],
}, {
  url: 'https://github.com/uber-common/viewport-mercator-project',
  displayname: 'viewport-mercator-project',
  page: 'https://github.com/uber-common/viewport-mercator-project',
  desc: 'A library that collects 3D enabled web mercator projection math and tests.',
  badges: ['javascript']
}, {
  name: 'monochrome',
  desc: 'A set of React components focusing on the needs of visualization applications (the "chrome" around a visualization)',
  badges: ['react']
}, {
  name: 'sub-redux',
  desc: 'A small system addingthings like watchers, pluggable sub-stores and test utilities to redux.',
  badges: ['react']
}];

@connect(null, { fetchRepos })
class Modules extends Component {
  componentWillMount() {
    this.props.fetchRepos([
      'uber-common/viewport-mercator-project'
    ])
  }

  render() {
    return (
      <div id="modules">
        <div className="section-title section-title--no-logo">
          <h2>Our Components</h2>
          <p>Smaller projects that have been created to solve everyday tasks.</p>
        </div>
        <div className="modules">
        	{modules.map((d, i) => <Repo key={i} {...d} />)}
        </div>
      </div>
    )
  }
}

export default Modules;