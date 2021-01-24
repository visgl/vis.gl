import React from 'react';
import {H1, H2, Paragraph} from './styling/components';

export default function Manifesto() {
  return (
    <div>
      <H1>What?</H1>
      <Paragraph>
        A suite of open geospatial visualization frameworks centered around deck.gl
      </Paragraph>

      <H1>Why?</H1>
      <Paragraph>
      The power of geospatial visualization comes when sharing results with others and should be done on the web.
      </Paragraph>

      <H1>How?</H1>
      <Paragraph>
        Join the open planning meetings.
      </Paragraph>

      <H1>History</H1>

      <Paragraph>
        <li>
          <ul>
            2020 - vis.gl Open Governance meetings started, under the auspices of the Linux Foundation and the UCF.
          </ul>
          <ul>
            2020 - Uber transferred a set of core vis.gl frameworks to the UCF.
          </ul>
          <ul>
            2019 - Uber created the Urban Computing Foundation (a sub-foundation of the Linux Foundation), transferring kepler.gl.
          </ul>
          <ul>
            2018 - Uber open sourced kepler.gl 
          </ul>
          <ul>
            2018 - loaders.gl and nebula.gl were created.
          </ul>
          <ul>
            2017 - math.gl was created.
          </ul>
          <ul>
            2017 - probe.gl was created.
          </ul>
          <ul>
            2016 - luma.gl was created.
          </ul>
          <ul>
            2015 - The core deck.gl framework was developed by Uber from 2015 to support a wide range of geospatial visualization use cases across the company, and was almost immediately open sourced.
          </ul>
        </li>
      </Paragraph>

      <H1>Open Governance</H1>

      <H2>vis.gl 8.4-8.5 Community Planning</H2>
      <H2>vis.gl 8.2-8.3 Community Planning</H2>


      <H1>What is New?</H1>

      <H2>vis.gl 8.4 Highlights</H2>

      <Paragraph>
      Release Date: TBD: Jan 2020
      New versions: `deck.gl` 8.4, `luma.gl` 8.4, `react-map-gl`
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
        </Paragraph>

      <H2>vis.gl 8.3 Highlights</H2>

      <Paragraph>
      Release Date: ?
      Updated: `deck.gl` 8.3, `luma.gl` 8.3 `loaders.gl` 2.3
      </Paragraph>

      <H2>vis.gl 8.2 Highlights</H2>

      <Paragraph>
        Release Date: ?
        Updated: `deck.gl` 8.2, `luma.gl` 8.2 `loaders.gl` 2.2
      </Paragraph>

    </div>
  );
}
