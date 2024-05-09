import React from 'react';
import {ContainerSm, H2, Paragraph} from '../components/styling/components';
import ImageBox from '../components/image-box';
import frameworksYaml from '../content/frameworks.yaml';
import markdownToHtml from '../lib/markdownToHtml';
import styled from '@emotion/styled';
import { breakpointsMediaQueries } from '../components/styling/style';

type FrameworksGroup = {
  title: string;
  description: string;
  entries: {
    name: string;
    alt: string;
    image: string;
    url: string;
    description: string;
  }[];
};

declare module '../content/frameworks.yaml' {
  export const frameworkGroups: FrameworksGroup[];
}

const FrameworkRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;

  ${breakpointsMediaQueries.lg} {
    flex-direction: column;
  }
`;

const FrameworkTitle = styled.div`
  flex: 0 0 150px;
  align-self: center;
  ${breakpointsMediaQueries.lg} {
    align-self: flex-start;
    flex: 1;
  }
`

const FrameworksTable = ({group}: {group: FrameworksGroup}) => {
  return (
    <div style={{paddingTop: '20px'}}>
      {group.entries.map(({name, alt, image, url, description}) => (
        <FrameworkRow key={name}>
          <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ImageBox width={150} height={100} alt={alt} src={image} />
            </a>
          </div>
          <FrameworkTitle>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </FrameworkTitle>
          <div style={{flex: 1}}>{description}</div>
        </FrameworkRow>
      ))}
    </div>
  );
};

const FrameworksPage = () => {
  return (
    <>
      <div className="section-title">
        <Paragraph>vis.gl</Paragraph>
        <Paragraph>Framework Catalog</Paragraph>
      </div>
      <ContainerSm className="section-text">
        <H2>The vis.gl Framework Catalog</H2>

        {frameworksYaml?.frameworkGroups.map((group, i) => (
          <div key={i}>
            {group.title ? <H2>{group.title}</H2> : null}
            {group.description ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(group.description)
                }}
              />
            ) : null}
            <FrameworksTable group={group} />
          </div>
        ))}
      </ContainerSm>
    </>
  );
};
export default FrameworksPage;
