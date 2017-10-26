import React from 'react';
import { Link } from 'react-router-dom'

import {PROJECTS} from '../config';
const links = [
{
  label: 'Frameworks',
  items: Object.entries(PROJECTS).map(d => ({label: d[0], url: d[1]}))
}, {
  label: 'Navigation',
  items: [
    {label: 'Home', url: '/home'},
    {label: 'About', url: '/about'},
    // {label: 'Blog', url: '/blog'}
  ]
}]

export default function Footer() {
  return <footer id='Footer'> 
    <div className="content">
    <div className="main">
      <h1>
        <Link to="/">{'VIS.GL'}</Link>
      </h1>
      <p>The Visualization Suite is brought to you by the Uber Visualization team. We re always looking for talent to do great work, so do not hesitate to get in touch!</p>
    </div>
    {links.map(d => (<div className="links" key={d.label}>
      <div className="label">{d.label}</div>
      <ul>
        {d.items.map(i => (<li key={i.label}>
          <a href={i.url}>
            {i.label}
          </a>
        </li>))}
      </ul>
      </div>))}
    </div>
  </footer>
}