import React from 'react';
import { H2, Paragraph } from '../components/styling/components';
import ImageBox from '../components/image-box';
import frameworksYaml from '../content/frameworks.yaml';
import markdownToHtml from '../lib/markdownToHtml';

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

const FrameworksTable = ({ group }: { group: FrameworksGroup }) => {
  return (
    <table cellSpacing={20}>
      <tbody>
        {group.entries.map(({ name, alt, image, url, description }) => (
          <tr key={name}>
            <td>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ImageBox width={150} height={100} alt={alt} src={image} />
              </a>
            </td>
            <td>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const FrameworksPage = () => {
  return (
    <>
      <div className="section-title">
        <Paragraph>vis.gl</Paragraph>
        <Paragraph>Framework Catalog</Paragraph>
      </div>
      <div className="section-text">
        <H2>The vis.gl Framework Catalog</H2>

        {frameworksYaml?.frameworkGroups.map((group, i) => (
          <div key={i}>
            {group.title ? <H2>{group.title}</H2> : null}
            {group.description ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(group.description),
                }}
              />
            ) : null}
            <FrameworksTable group={group} />
          </div>
        ))}
      </div>
    </>
  );
};
export default FrameworksPage;
