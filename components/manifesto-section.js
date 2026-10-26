import React from 'react';
import styled from '@emotion/styled';
import {ContainerSm, H1, Paragraph} from './styling/components';
import ImageBox from './image-box';
import {breakpointsMediaQueries} from './styling/style';
import Link from '@docusaurus/Link';

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
  flex-wrap: wrap;
  gap: 24px;
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
          vis.gl is an open source suite of composable frameworks for geospatial visualization,
          with projects that work independently or together around <a href="https://deck.gl">deck.gl</a>.
        </TitleSection>
      </ContainerSm>
      <ContainerSm>
        <SectionContainer>
          <SectionTitle>Contribution</SectionTitle>
          <SectionContent>
            <Paragraph>
              vis.gl is built in the open. Contributions are welcome from individuals, companies,
              and research teams.
            </Paragraph>
            <ContributorContainer>
              <ContributorSection>
                <div className="logo-title">Lead Contributors</div>
                <div className="logo">
                  <a href="https://unfolded.ai">
                    <ImageBox
                      width={150}
                      height={60}
                      src={'/images/logos/unfolded-logo.png'}
                      alt="Unfolded"
                    />
                  </a>
                  <a href="https://carto.com">
                    <ImageBox
                      width={100}
                      height={40}
                      src={'/images/logos/CARTO-logo-positive.png'}
                      alt="CARTO"
                    />
                  </a>
                </div>
              </ContributorSection>
              <ContributorSection>
                <div className="logo-title">Sponsors</div>
                <div className="logo">
                  <a href="https://studio.foursquare.com">
                    <ImageBox width={150} height={60} src="/images/logos/foursquare.svg" alt="Foursquare" />
                  </a>
                  <a href="https://www.esri.com/">
                    <ImageBox width={120} height={60} src="/images/logos/esri.jpg" alt="Esri" />
                  </a>
                </div>
              </ContributorSection>
              <ContributorSection>
                <div className="logo-title">Created By</div>
                <div className="logo tall">
                  <a href="https://uber.com/">
                    <ImageBox
                      width={100}
                      height={60}
                      src={'/images/logos/uber-logo-black.jpg'}
                      alt="Uber"
                    />
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
              vis.gl projects are developed in the open. Join planning meetings, contribute code,
              or help shape the technical roadmap.
            </Paragraph>
            <GovernanceLogos>
              <a href="https://www.openjsf.org/">
                <ImageBox
                  width={200}
                  height={60}
                  src={'/images/logos/openjsf-color-textg.png'}
                  alt="OpenJS Foundation"
                />
              </a>
              <a href="https://openvisualization.org/">
                <ImageBox
                  width={250}
                  height={60}
                  src={'/images/logos/openvis-logo.png'}
                  alt="Open Visualization"
                />
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
              Browse the <Link href="/frameworks">vis.gl Framework Catalog</Link> to find the
              right tools for your project. Use each framework on its own or combine them.
            </Paragraph>
            <img
              style={{width: '100%', height: 'auto', objectFit: 'cover'}}
              src={'/images/frameworks.jpg'}
              height={720}
              width={1080}
              alt=""
            />
          </SectionContent>
        </SectionContainer>
      </ContainerSm>

    </Sections>
  );
}
