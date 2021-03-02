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

# Releases

## vis.gl 8.4

Release Date: Jan 31, 2021

 brings a 

**deck.gl 8.4 Highlights** ([Release Notes](https://deck.gl/docs/whats-new))

`luma.gl` 8.4, `react-map-gl`

Fixes only: `loaders.gl` 2.3 

- BaseMaps
  - `react-map-gl` now supports Mapbox GL JS v2, Mapbox GL JS v1, and MapLibre renderers.
  - `bing` maps??? 

- TypeScript 
  - `luma.gl` all modules now p
  - `react-map-gl` - is now written in typescript

- `deck.gl` 8.4
  - 

- `luma.gl` 8.4
  - TypeScript typings

- `math.gl` 3.4
  - `@math.gl/geoid` - New module for working with Earth Gravity Models (micro-adjustments of ellipsoid)
  - `@math.gl/polygon` - Improved support for binary polygons

#### vis.gl 8.3 Highlights

Release Date: ?

Updated: `deck.gl` 8.3, `luma.gl` 8.3 `loaders.gl` 2.3

#### vis.gl 8.2 Highlights

Release Date: ?

Updated: `deck.gl` 8.2, `luma.gl` 8.2 `loaders.gl` 2.2

# Early History


 */

function ManifestoSection({ imageResolver }) {
  console.log(imageResolver);
  return (
    <div>
      <div className="section-title">
        <Paragraph>vis.gl</Paragraph>
        <Paragraph>A suite of GPU powered geospatial frameworks</Paragraph>
      </div>
      <div className="section-text">

        <center>
          <H2>Created By</H2>
          <a href="https://uber.com/">
            <img height="60" src={imageResolver['logos/uber-logo-black.jpg']} />
          </a>
        </center>
        <center>
          <H2>Core Contributors</H2>
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
        <br />

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

        <H2>About</H2>
        <Paragraph>
          vis.gl is a suite of open source geospatial visualization frameworks
          centered around the [deck.gl](https://deck.gl) geospatial rendering
          framework.
        </Paragraph>

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

        <H2>The vis.gl frameworks</H2>
        {renderTable(imageResolver)}

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

function renderTable(imageResolver) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <H3></H3>
          </th>
          <th>
            <H3></H3>
          </th>
          <th>
            <H3></H3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              height="60"
              alt="kepler.gl"
              title="kepler.gl"
              src={imageResolver['frameworks/kepler.png']}
            />
          </td>
          <td>
            <a href="https://kepler.gl/">
              <code>kepler.gl</code>
            </a>
          </td>
          <td>
            Application for client-side visualization of data using deck.gl.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="60"
              alt="deck.gl"
              title="deck.gl"
              src={imageResolver['frameworks/deck.png']}
            />
          </td>
          <td>
            <a href="https://deck.gl/">
              <code>deck.gl</code>
            </a>
          </td>
          <td>Visualization layers for large scale geospatial data.</td>
        </tr>
        <tr>
          <td>
            <img
              height="60"
              alt="loaders.gl"
              title="loaders.gl"
              src={imageResolver['frameworks/loaders.png']}
            />
          </td>
          <td>
            <a href="https://loaders.gl/">
              <code>loaders.gl</code>
            </a>
          </td>
          <td>
            Framework-independent loaders for file formats for point clouds, 3D
            geometries, images, geospatial formats as well as tabular data.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="60"
              alt="nebula.gl"
              title="nebula.gl"
              src={imageResolver['frameworks/nebula.png']}
            />
          </td>
          <td>
            <a href="https://nebula.gl/">
              <code>nebula.gl</code>
            </a>
          </td>
          <td>A high-performance feature editing framework for deck.gl.</td>
        </tr>
        <tr>
          <td>
            <img
              height="60"
              alt="luma.gl"
              title="luma.gl"
              src={imageResolver['frameworks/luma.png']}
            />
          </td>
          <td>
            <a href="https://luma.gl/">
              <code>luma.gl</code>
            </a>
          </td>
          <td>
            A high-performance WebGL library for high-performance visualization
            and GPU computation.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="60"
              alt="react-map-gl"
              title="react-map-gl"
              src={imageResolver['frameworks/react-map-gl.png']}
            />
          </td>
          <td>
            <a href="http://visgl.github.io/react-map-gl/">
              <code>react-map-gl</code>
            </a>
          </td>
          <td>
            A React wrapper for Mapbox GL JS that integrates with deck.gl.
          </td>
        </tr>
        <tr>
          <td>
            <img
              height="60"
              alt="math.gl"
              title="math.gl"
              src={imageResolver['frameworks/math.png']}
            />
          </td>
          <td>
            <a href="https://math.gl/">
              <code>math.gl</code>
            </a>
          </td>
          <td>Math library focusing on 3D and geospatial math.</td>
        </tr>
        {/* Related but unfortunately not part of vis.gl
        <tr>
          <td>
            <img
              height="60"
              alt="H3"
              title="H3"
              src={imageResolver['frameworks/h3.png']}
            />
          </td>
          <td>
            <a href="https://h3geo.org">
              <code>H3</code>
            </a>
          </td>
          <td>Hexagon based discrete global grid system.</td>
        </tr>
        */}
      </tbody>
    </table>
  );
}

export default ManifestoSection;
