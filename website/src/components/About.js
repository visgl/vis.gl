import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="container ph2 f fcol">
        <div className="m4-top fg">
          {'The Visualization Suite is brought to you by the Uber Visualization team. '}
          {
            "We're always looking for talents to build cool stuff, so do not hesitate to get in touch!"
          }

          <div className="Join">
            <a href="https://www.uber.com/careers/list/20242" target="_blank">
              {'JOIN US!'}
            </a>
          </div>

          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{'Team'}</h1>

          <div />
        </div>
      </div>
    )
  }
}

export default About
