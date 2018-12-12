import React from 'react'
import Hero from './hero';
import Repos from './repos';
import Showcase from './showcase';
import Academy from './academy';
import Modules from './modules';

function Home({starResolver, imageResolver}) {
  return <div id="home">
    <Hero />
    <Repos starResolver={starResolver} imageResolver={imageResolver}/>
    <Showcase imageResolver={imageResolver}/>
    <Academy />
    <Modules />
  </div>
}

export default Home
