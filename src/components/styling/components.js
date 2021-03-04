import styled from 'styled-components';
import { breakpointsMediaQueries } from './style';

// New components
export const ContainerLg = styled.div.attrs({
  className: 'container-lg',
})`
  max-width: ${props => props.theme.containerMaxWidth}px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  ${breakpointsMediaQueries.xl} {
    margin: 0px 40px;

    &.no-margin {
      margin: 0 0;
    }
  }
`;

export const ContainerSm = styled(ContainerLg).attrs({
  className: 'container-sm',
})`
  max-width: 1100px;
  margin-top: 100px;

  :last-child {
    margin-bottom: 100px
  }
`;

export const Headline = styled.div.attrs({
  className: 'content-title',
})`
  font-family: ${props => props.theme.fontFamilySemiBold};
  font-size: ${props => props.theme.fontSizeUltraHeading};
  line-height: ${props => props.theme.lineHeightUltraHeading};
  letter-spacing: ${props => props.theme.letterSpacingUltraHeading};
  font-weight: ${props => props.theme.fontWeightUltraHeading};
`;

export const H1 = styled(Headline).attrs({
  className: 'content-title h1',
})`
  font-size: ${props => props.theme.fontSizeH1};
  font-family: ${props => props.theme.fontFamilyMedium};
  line-height: ${props => props.theme.lineHeightH1};
  color: ${props => props.theme.darkBlue};
  letter-spacing: ${props => props.theme.letterSpacingH1};
  margin: 4px 0 24px;
`;

export const H2 = styled(Headline).attrs({
  className: 'content-title h2',
})`
  font-size: ${props => props.theme.fontSizeH2};
  line-height: ${props => props.theme.lineHeightH2};
  font-family: ${props => props.theme.fontFamilyMedium};
  margin: 24px 0 16px;
`;

export const H3 = styled(Headline).attrs({
  className: 'content-title h3',
})`
  font-weight: normal;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeH3};
  line-height: ${props => props.theme.lineHeightH3};
`;

export const H4 = styled(H3).attrs({
  className: 'content-title h4',
})`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeH4};
  line-height: ${props => props.theme.lineHeightH4};
`;

export const Paragraph = styled.p.attrs({
  className: 'content-paragraph',
})`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizeP1};
  line-height: ${props => props.theme.lineHeightP1};
  margin: 0 0 16px;
`;

export const List = styled.ul`
  margin: 0 0 12px;
`;

export const ListItem = styled.li`
  margin-bottom: 4px;
`;

export const InlineCode = styled.code`
  background-color: #f7f7f7;
  border-radius: 4px;
  padding: 0 5px;
  font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
    'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
    'Courier New', Courier, monospace;
  font-size: 0.9em;
  margin: 1px 0;
  line-height: calc(1.5em / 0.9 - 2px);
  display: inline-block;
  vertical-align: top;
`;

export const SubTitle = styled.div`
  color: ${props => props.theme.gray};
  font-size: 14px;
`;
/*
// paragraph on dark background
export const ParagraphLight = styled(Paragraph)`
  color: ${props => props.theme.fontColorLT};
  opacity: 0.8;
`;

export const SubTitle = styled(H3)`
  margin-top: 44px;
  text-align: center;
`;

export const HeadlineSubtitle = styled.div.attrs({
  className: 'headline-subtitle'
})`
  font-size: 20px;
  line-height: 180%;
  color: ${props => props.theme.headlineSubtitleColor};
  white-space: pre-line;

  ${breakpointsMediaQueries.sm} {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;
// End new components

export const TitleSemiBold = styled.div.attrs({
  className: 'content-title-semibold'
})`
  font-family: ${props => props.theme.fontFamilySemiBold};
  font-size: ${props => props.theme.fontSizeH4}
  font-weight: 500;
  font-size: ${props => props.theme.lineHeightH4}
  margin-top: 12px;
  text-align: center;
  color: ${props => props.theme.highlightColor};
`;

export const Button = styled.button.attrs(props => ({
  className: classnames('button', props.link ? 'link' : '')
}))`
  align-items: center;
  background-color: ${props => props.theme.violetBtn};
  border: none;
  border-radius: 6px;
  color: ${props => props.theme.primaryBtnColor};
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  font-family: ${props => props.theme.fontFamilyMedium};
  justify-content: center;
  letter-spacing: 1px;
  line-height: 14px;
  outline: 0;
  padding: 14px 32px;
  text-align: center;
  transition: ${props => props.theme.transition};
  vertical-align: middle;
  width: ${props => props.width || 'auto'};
  white-space: nowrap;

  :hover,
  :focus,
  :active,
  &.active {
    background-color: ${props => props.theme.primaryBtnBgdHover};
  }

  &.link {
    background-color: transparent;
    color: ${props => props.theme.carouselButton};
    font-family: ${props => props.theme.fontFamilyMedium};
    &:hover {
      color: #000;
    }
  }

  svg {
    margin-right: 8px;
  }
`;

export const RoundButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  border-radius: 35px;
  padding: 20px 32px;
  ${breakpointsMediaQueries.sm} {
    padding: 16px 20px;
  }
  &.outline {
    color: ${props => props.theme.violetBtn};
    background-color: transparent;
    border: 1px solid ${props => props.theme.violetBtn};
  }
  &.white-btn {
    color: ${props => props.theme.lightBtnColor};
    background-color: ${props => props.theme.lightBtnBgd};
    :hover,
    :focus,
    :active,
    &.active {
      background-color: ${props => props.theme.lightBtnBgdHover};
    }
  }
`;

export const ClearButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  border-radius: 35px;
  padding: 20px 32px;
  background-color: transparent;
  color: ${props => props.theme.violetBtn};
  :hover,
  :focus,
  :active,
  &.active {
    background-color: transparent;
    color: ${props => props.theme.primaryBtnBgdHover};
  }
`;

const StyledIconTile = styled.div.attrs({
  className: 'icon-tile'
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: left;
  }

  .icon {
    width: 62px;
    height: 62px;

    image: {
      width: 100%;
    }
  }

  .title {
    font-family: ${props => props.theme.fontFamilySemiBold};
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-top: 24px;
    margin-left: 10px;
  }
`;

export const SectionList = styled.div.attrs({
  className: 'site-section__list'
})`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: ${props => props.theme.sectonContentPadding};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionListFixed = styled.div.attrs({
  className: 'site-section__list-fixed'
})`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: ${props => props.theme.sectonContentPadding};
`;

export const SectionListLeft = styled.div.attrs({
  className: 'site-section__list-left'
})`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: ${props => props.theme.sectonContentPadding};
  @media (max-width: 1024px) {
    margin-left: 450px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    margin-left: 100px;
  }
`;

export const SectionListColumn = styled.div.attrs({
  className: 'site-section__list__column'
})`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-bottom: 40px;
`;
*/
