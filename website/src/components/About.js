import React, { Component } from 'react'

import shuffle from 'utils/shuffle'

const members = [
  { name: 'Shan He', pic: 'https://avatars2.githubusercontent.com/u/3605556' },
  { name: 'Nicolas Belmonte', pic: 'https://avatars1.githubusercontent.com/u/71751' },
  { name: 'Jérôme Cukier', pic: 'https://avatars3.githubusercontent.com/u/9727630' },
  { name: 'Chris Chua', pic: 'https://avatars0.githubusercontent.com/u/132584' },
  { name: 'Javid Hsueh', pic: 'https://avatars3.githubusercontent.com/u/3599601' },
  { name: 'Ib Green', pic: 'https://avatars2.githubusercontent.com/u/7025232' },
  { name: 'Anh Mai', pic: 'https://avatars2.githubusercontent.com/u/2263443' },
  { name: 'Yang Wang', pic: 'https://avatars1.githubusercontent.com/u/144743' },
  { name: 'Andrew McNutt', pic: 'https://avatars0.githubusercontent.com/u/6854312' },
  { name: 'Wesam Manassra', pic: 'https://avatars0.githubusercontent.com/u/1332450' },
  { name: 'Xiaoji Chen', pic: 'https://avatars0.githubusercontent.com/u/2059298' },
  { name: 'Brian Ford', pic: 'https://avatars3.githubusercontent.com/u/474988' },
  { name: 'Alison Lee', pic: 'https://avatars2.githubusercontent.com/u/2983206' },
  { name: 'Shaojing Li', pic: 'https://avatars0.githubusercontent.com/u/21322704' },
  { name: 'Balthazar Gronon', pic: 'https://avatars2.githubusercontent.com/u/6033345' },
  { name: 'Eric Socolofsky', pic: 'https://avatars2.githubusercontent.com/u/1127259' },
  { name: 'Ravi Akkenapally', pic: 'https://avatars1.githubusercontent.com/u/9502731' },
  { name: 'Jiawei Zhang', pic: 'https://avatars1.githubusercontent.com/u/10911507' },
  { name: 'Jon Sadka', pic: 'https://avatars3.githubusercontent.com/u/6504944' },
  { name: 'Chris Chen', pic: 'https://avatars0.githubusercontent.com/u/1408762' },
  { name: 'David Schnurr', pic: 'https://avatars0.githubusercontent.com/u/875591' },
  { name: 'Adam Krebs', pic: 'https://avatars0.githubusercontent.com/u/931368' },

  // Non-github
  {
    name: 'Xintong Xia',
    pic:
      'https://media.licdn.com/media/AAEAAQAAAAAAAAlRAAAAJDFkZThiOTZiLTcxM2UtNGFkMS1iMGVhLTIyMjhkZDMyNTBhZg.jpg',
  },
  {
    name: 'Jian Huang',
    pic: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  },
  { name: 'Ramik Sadana', pic: 'http://ramiksadana.com/images/Ramik.png' },
  {
    name: 'Guillaume Galuz',
    pic: 'https://secure.gravatar.com/avatar/acb41f0fbd1b36f9ccdc5622af418070.png',
  },
  { name: 'Lezhi Li', pic: 'https://media.licdn.com/media/p/6/005/058/31e/0314532.jpg' },
  { name: 'Austin Greco', pic: 'https://media.licdn.com/media/p/3/005/027/104/3de1761.jpg' },
  {
    name: 'Tim Wojtaszek',
    pic:
      'https://media.licdn.com/media/AAEAAQAAAAAAAAOjAAAAJGVlOTEzZWZlLTJhZjMtNDVhNS05OGIyLTBhN2I2NDQyZDc2Mw.jpg',
  },
]

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

          <div className="f fjc fw">
            {shuffle(members).map(member => (
              <div className="Member" key={member.name}>
                <img src={member.pic} />
                {member.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default About
