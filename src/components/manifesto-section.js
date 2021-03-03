import React from 'react';
import {
  ContainerLg,
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  List,
  ListItem,
  InlineCode,
} from './styling/components';

/*

# Open Governance

#### vis.gl 8.4-8.5 Community Planning
#### vis.gl 8.2-8.3 Community Planning

*/

export default function ManifestoSection({ imageResolver }) {
  console.log(imageResolver);
  return (
    <div>
      {/*
      <div className="section-title">
        <Paragraph>vis.gl</Paragraph>
        <Paragraph>GPU powered geospatial frameworks</Paragraph>
        <Paragraph>Promoting Industry Collaboration via Open Governance</Paragraph>
      </div>
      */}
      <div className="section-text">

      <H2>About</H2>
        <Paragraph>
          vis.gl is a suite of composable, interoperable open source 
          geospatial visualization frameworks
          centered around the <a href="https://deck.gl">deck.gl</a> geospatial rendering
          framework.
        </Paragraph>

        <center>
          <H2>Lead Contributors</H2>
          <a href="https://unfolded.ai">
            <img height="40" src={imageResolver['logos/unfolded-logo.png']} />
          </a>
          <span style={{ padding: 10 }} />
          <a href="https://carto.com">
            <img
              height="40"
              src={imageResolver['logos/CARTO-logo-positive.png']}
            />
          </a>
        </center>

        <center>
          <H2>Created By</H2>
          <a href="https://uber.com/">
            <img height="60" src={imageResolver['logos/uber-logo-black.jpg']} />
          </a>
        </center>
        <br />

        {/*
        <center>
          <H2>Sponsored By</H2>
          <a href="https://uber.com/">
            <img height="60" src={imageResolver['logos/uber-logo-black.jpg']} />
          </a>
          <span style={{ padding: 10 }} />
          <a href="https://www.here.com/">
            <img height="40" src={imageResolver['logos/here-logo.png']} />
          </a>
          <span style={{ padding: 10 }} />
          <a href="https://google.com">
            <img height="40" src={imageResolver['logos/google-logo.png']} />
          </a>
          <span style={{ padding: 10 }} />
          <a href="https://esri.com">
            <img height="40" src={imageResolver['logos/esri-logo.png']} />
          </a>
        </center>
        <br />
        */}

        <H2>Open Governance</H2>
        <Paragraph>
          vis.gl is under open governance, and anyone can join the open planning
          meetings. Contributor status is available and technical steering
          committee membership is available to major contributors.
        </Paragraph>

        <br />
        <center>
          <a href="https://www.linuxfoundation.org//">
            <img
              height="40"
              src={imageResolver['logos/linux-foundation.svg']}
            />
          </a>
          <span style={{ padding: 50 }} />
          <a href="https://uc.foundation/">
            <img height="40" src={imageResolver['logos/ucf-color-hztl.svg']} />
          </a>
        </center>
        <br />

        <H2>The Frameworks</H2>

        The <a href="/frameworks">vis.gl Framework Catalog</a> provides an overview
        of the various frameworks in the vis.gl framework suite.

        <H2>Recent Releases</H2>

        <H3>vis.gl 8.4</H3> 
        <Paragraph>
        Release Date: Jan 31, 2021

        **deck.gl 8.4** ([Release Notes](https://deck.gl/docs/whats-new))
        <List>
          <ListItem>
            TBA
          </ListItem>
        </List>

        **luma.gl 8.4** ([Release Notes](https://luma.gl/docs/whats-new))
        <List>
          <ListItem>
            TypeScript
          </ListItem>
        </List>

        **react-map-gl**
        <List>
          <ListItem>
            `react-map-gl` now supports Mapbox GL JS v2, Mapbox GL JS v1, and MapLibre renderers.
          </ListItem>
          <ListItem>
            TypeScript
          </ListItem>
        </List>

        **math.gl 3.4**
        <List>
          <ListItem>
            `@math.gl/geoid` - New module for working with Earth Gravity Models (micro-adjustments of ellipsoid)
          </ListItem>
          <ListItem>
            `@math.gl/polygon` - Improved support for binary polygons
          </ListItem>
        </List>

        </Paragraph>

        <H2>History</H2>

        <Paragraph>
          A brief history of the vis.gl framework suite.

          <br/>
          <br/>

          <List style={{paddingLeft: 25}}>
            <ListItem>
              2020 - vis.gl Open Governance meetings started, under the auspices
              of the Linux Foundation and the UCF.
            </ListItem>
            <ListItem>
              2020 - Uber transferred a set of core vis.gl frameworks to the
              UCF.
            </ListItem>
            <ListItem>
              2019 - Uber created the Urban Computing Foundation (a
              sub-foundation of the Linux Foundation), transferring kepler.gl.
            </ListItem>
            <ListItem>2018 - Uber open sourced kepler.gl</ListItem>
            <ListItem>2018 - loaders.gl and nebula.gl were created.</ListItem>
            <ListItem>2017 - math.gl was created.</ListItem>
            <ListItem>2017 - probe.gl was created.</ListItem>
            <ListItem>2016 - luma.gl was created.</ListItem>
            <ListItem>
              2015 - The core deck.gl framework was open sourced by Uber.
            </ListItem>
            <ListItem>
              2015 - The core deck.gl framework was developed by Uber from 2015
              to support a wide range of geospatial visualization use cases
              across the company,.
            </ListItem>
          </List>
        </Paragraph>
      </div>
    </div>
  );
}
