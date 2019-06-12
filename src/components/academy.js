import React from 'react'

import LinkWithArrow from './link-with-arrow'

export default function Academy() {
  return (
    <div id="academy">
      <div className="section-title">
        <h2>Vis Academy</h2>
        <p style={{ marginBottom: '3rem' }}>Learn from the experts and get started quickly.</p>

        <div className="big-link" style={{ margin: 0 }}>
          <LinkWithArrow label="Get started!" url="http://vis.academy" />
        </div>
      </div>
    </div>
  )
}
