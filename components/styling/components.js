import styled from '@emotion/styled';
import {breakpointsMediaQueries} from './style';

// New components
export const ContainerLg = styled.div`
  max-width: ${props => props.theme.containerMaxWidth}px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  ${breakpointsMediaQueries.xl} {
    padding: 0 40px;

    &.no-margin {
      margin: 0 0;
    }
  }
`;

export const ContainerSm = styled(ContainerLg)`
  max-width: 1100px;
  margin-top: 50px;
  width: 100%;

  :last-child {
    margin-bottom: 100px;
  }
`;

export const Headline = styled.div`
  font-family: ${props => props.theme.fontFamilySemiBold};
  font-size: ${props => props.theme.fontSizeUltraHeading};
  line-height: ${props => props.theme.lineHeightUltraHeading};
  letter-spacing: ${props => props.theme.letterSpacingUltraHeading};
  font-weight: ${props => props.theme.fontWeightUltraHeading};
`;

export const H1 = styled(Headline)`
  font-size: ${props => props.theme.fontSizeH1};
  font-family: ${props => props.theme.fontFamilyMedium};
  line-height: ${props => props.theme.lineHeightH1};
  color: ${props => props.theme.darkBlue};
  letter-spacing: ${props => props.theme.letterSpacingH1};
  margin: 4px 0 24px;
`;

export const H2 = styled(Headline)`
  font-size: ${props => props.theme.fontSizeH2};
  line-height: ${props => props.theme.lineHeightH2};
  font-family: ${props => props.theme.fontFamilyMedium};
  margin: 24px 0 16px;
`;

export const H3 = styled(Headline)`
  font-weight: normal;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeH3};
  line-height: ${props => props.theme.lineHeightH3};
`;

export const H4 = styled(H3)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeH4};
  line-height: ${props => props.theme.lineHeightH4};
`;

export const Paragraph = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeP1};
  line-height: ${props => props.theme.lineHeightP1};
  margin: 0 0 16px;
`;

export const List = styled.ul`
  margin: 0 0 12px;
`;
