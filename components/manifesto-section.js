import React from 'react';
import styled from '@emotion/styled';
import {ContainerSm, H1, H3, Paragraph, List} from './styling/components';
import ImageBox from './image-box';
import Link from 'next/link';
import {breakpointsMediaQueries} from './styling/style';
import Image from 'next/image';

/*

# Open Governance

#### vis.gl 8.4-8.5 Community Planning
#### vis.gl 8.2-8.3 Community Planning

*/

const TitleSection = styled(H1)`
  font-family: ${props => props.theme.fontFamilyLight};
  line-height: 150%;
  background: url(${props => props.backgroundImg}) no-repeat;
  min-height: 300px;
  padding-left: 200px;
  margin-top: 50px;
  padding-top: 50px;

  ${breakpointsMediaQueries.lg} {
    padding-left: 0px;
  }
`;

const ContributorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const ContributorSection = styled.div`
  display: flex;
  flex-direction: column;
  .logo-title {
    font-size: 14px;
    line-height: 110%;
    color: ${props => props.theme.gray};
    font-family: ${props => props.theme.fontFamilyLight};
  }

  .logo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
    & > * + * {
      margin-left: 30px;
      margin-top: 0px;
    }

    flex-direction: row;
    ${breakpointsMediaQueries.lg} {
      flex-direction: column;

      & > * + * {
        margin-left: 0px;
        margin-top: 10px;
      }
    }
  }

  .logo.tall {
    margin-top: 20px;
    margin-left: -18px;
  }

  :first-child {
    padding-right: 40px;
  }
  :not(:first-child) {
    border-left: 1px solid ${props => props.theme.gray};
    padding-left: 40px;
  }
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 50px;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${breakpointsMediaQueries.lg} {
    flex-direction: column;
  }
`;

const SectionTitle = styled.div`
  width: 264px;
  margin-right: 20px;
  font-size: 18px;
  line-height: 20px;
  font-family: ${props => props.theme.fontFamilyMedium};
  flex-shrink: 0;

  ${breakpointsMediaQueries.lg} {
    margin-bottom: 20px;
  }
`;

const SectionContent = styled.div`
  flex-grow: 1;
`;

const ListTitle = styled.div`
  font-size: 16px;
  margin-top: 18px;
  font-family: ${props => props.theme.fontFamilyMedium};

  :first-child {
    margin-top: 0;
  }
`;

const ListItem = styled.div`
  font-size: 16px;
  color: ${props => props.theme.gray};
`;

const GovernanceLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
  & > * + * {
    margin-left: 30px;
    margin-top: 0px;
  }

  flex-direction: row;
  ${breakpointsMediaQueries.lg} {
    flex-direction: column;

    & > * + * {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`

export default function ManifestoSection() {
  return (
    <Sections>
      <ContainerSm>
        <TitleSection backgroundImg={'/images/logos/vis-logo.png'}>
          Vis.gl is a suite of composable, interoperable open source geospatial visualization
          frameworks centered around <a href="https://deck.gl">deck.gl</a>.
        </TitleSection>
      </ContainerSm>
      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Contribution</SectionTitle>
          <SectionContent>
            <ContributorContainer>
              <ContributorSection>
                <div className="logo-title">Lead Contributors</div>
                <div className="logo">
                  <a href="https://unfolded.ai">
                    <ImageBox width={150} height={60} src={'/images/logos/unfolded-logo.png'} />
                  </a>
                  <a href="https://carto.com">
                    <ImageBox
                      width={100}
                      height={40}
                      src={'/images/logos/CARTO-logo-positive.png'}
                    />
                  </a>
                </div>
              </ContributorSection>
              <ContributorSection>
                <div className="logo-title">Created By</div>
                <div className="logo tall">
                  <a href="https://uber.com/">
                    <ImageBox width={100} height={60} src={'/images/logos/uber-logo-black.jpg'} />
                  </a>
                </div>
              </ContributorSection>
            </ContributorContainer>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Open Governance</SectionTitle>
          <SectionContent>
            <Paragraph>
              vis.gl is under open governance, and anyone can join the open planning meetings.
              Contributor status is available and technical steering committee membership is
              available to major contributors.
            </Paragraph>
            <GovernanceLogos>
              <a href="https://www.openjsf.org/">
                <ImageBox width={200} height={60} src={'/images/logos/openjsf-color-textg.png'} />
              </a>
              <a href="https://openvisualization.org/">
                <ImageBox width={250} height={60} src={'/images/logos/openvis-logo.png'} />
              </a>
            </GovernanceLogos>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Frameworks</SectionTitle>
          <SectionContent>
            <Paragraph>
              The <Link href="/frameworks"><a>vis.gl Framework Catalog</a></Link> provides an overview of the various frameworks in the vis.gl framework suite.
            </Paragraph>
            <Image layout="responsive" objectFit="cover" src={'/images/frameworks.jpg'} height={720} width={1080} alt=""/>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Releases</SectionTitle>
          <SectionContent>
            <H3>vis.gl 9.0</H3>
            <Paragraph>
              <ListTitle>Release Date: Mar 21, 2024</ListTitle>
              <ListTitle>deck.gl 9.0</ListTitle>

              <ListItem>
                <a href="https://deck.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />

              <ListTitle>luma.gl 9.0</ListTitle>
              <ListItem>
                <a href="https://luma.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />

              <ListTitle>math.gl 4.0</ListTitle>
              <ListItem>
                <a href="https://visgl.github.io/math.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />

              <ListTitle>loaders.gl 4.2</ListTitle>
              <ListItem>
                <a href="https://loaders.gl/docs/whats-new">Release Notes</a>
              </ListItem>
              <div style={{marginTop: 5}} />
            </Paragraph>
            <H3>react-map-gl 7.1</H3>
            <Paragraph>
              <ListTitle>Release Date: Jun 30, 2023</ListTitle>
              <ListItem>
                <a href="https://visgl.github.io/react-map-gl/docs/whats-new">Release Notes</a>
              </ListItem>
            </Paragraph>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

      <ContainerSm>
        <SectionContainer>
          <SectionTitle>History</SectionTitle>
          <SectionContent>
            <ListTitle>2024</ListTitle>
            <List>
              <ListItem>react-google-maps was created.</ListItem>
            </List>
            <ListTitle>2023</ListTitle>
            <List>
              <ListItem><a href="https://deck.gl/events/new-york-summit-2023/">Open Visualization Collaborator Summit</a> hosted in New York</ListItem>
            </List>
            <ListTitle>2022</ListTitle>
            <List>
              <ListItem>First annual <a href="https://deck.gl/events/madrid-summit-2022/">Open Visualization Collaborator Summit</a> hosted in Madrid</ListItem>
              <ListItem>
                flowmap.gl joined the vis.gl project.
              </ListItem>
              <ListItem>
                vis.gl and kepler.gl joined the <a href="https://openjsf.org/">OpenJS Foundation</a>.
              </ListItem>
              <ListItem>Urban Computing Foundation merged with the OpenJS Foundation, and formed the <a href="https://www.openvisualization.org/">Open Visualization Collaboration Group</a>.</ListItem>
            </List>
            <ListTitle>2020</ListTitle>
            <List>
              <ListItem>
                vis.gl Open Governance meetings started, under the auspices of the Linux Foundation
                and the UCF.
              </ListItem>
              <ListItem>Uber transferred a set of core vis.gl frameworks to the UCF.</ListItem>
              <ListItem>hubble.gl was created.</ListItem>
            </List>
            <ListTitle>2019</ListTitle>
            <List>
              <ListItem>
                Uber created the Urban Computing Foundation (a sub-foundation of the Linux
                Foundation), transferring kepler.gl.
              </ListItem>
            </List>
            <ListTitle>2018</ListTitle>
            <List>
              <ListItem>Uber open sourced kepler.gl</ListItem>
              <ListItem>loaders.gl and nebula.gl were created.</ListItem>
            </List>
            <ListTitle>2017</ListTitle>
            <List>
              <ListItem>math.gl was created.</ListItem>
              <ListItem>probe.gl was created.</ListItem>
            </List>
            <ListTitle>2016</ListTitle>
            <ListItem>luma.gl was created.</ListItem>
            <ListTitle>2015</ListTitle>
            <List>
              <ListItem>The core deck.gl framework was open sourced by Uber.</ListItem>
              <ListItem>
                The core deck.gl framework was developed by Uber to support a wide range of
                geospatial visualization use cases across the company.
              </ListItem>
            </List>
          </SectionContent>
        </SectionContainer>
      </ContainerSm>
    </Sections>
  );
}
