import {css} from '@emotion/react';

export const COLORS = {
  link: '#d0021b',
  highlight: '#23DCFD',
  white: '#FFFFFF',
  black: '#000000',
  gray: 'rgba(0, 0, 0, 0.6)',
  darkGrey: '#858A95',
  primary: '#269DF0',
  offBlack: '#363f59',
  primaryLight: '#00BBF6',
  darkBlue: '#0B162B',
  violetButton: '#5558db',
  voiletButtonHover: '#6669DF',
  darkVioletBackground: '#131548',
  violetBorderButton: '#9597e9',
  headlineSubtitleColor: '#0b162b99', // rgba(11, 22, 43, 0.6)
  darkGreyBackground: '#121621',
  darkBackground: '#09101d',
  lightGreyBackground: '#f7f8fa',
  lightBtnBgd: '#ECECEC',
  lightBlack: '#0e111a',
  green: '#4BB34B',
};

const FontSizes = {
  ultraHeading: '48px',
  h1: '36px',
  h2: '20px',
  h3: '18px',
  h4: '16px',
  btnText: '16px',
  p1: '16px',
};

const LineHeights = {
  ultraHeading: '64px',
  h1: '110%',
  h2: '110%',
  h3: '110%',
  h4: '110%',
  btnText: '110%',
  p1: '180%',
};

const FontWeight = {
  ultraHeading: 400,
};

const LetterSpacing = {
  ultraHeading: '0.5px',
  h1: '0.5px',
};

export const breakPoints = {
  xl: 1300,
  lg: 1000,
  md: 750,
  sm: 500,
};

export const breakpointsMediaQueries = {
  xl: `@media (max-width: ${breakPoints.xl}px)`,
  lg: `@media (max-width: ${breakPoints.lg}px)`,
  md: `@media (max-width: ${breakPoints.md}px)`,
  sm: `@media (max-width: ${breakPoints.sm}px)`,
};

export const theme = {
  linkColor: COLORS.link,
  fontColor: COLORS.black,
  fontColorLT: COLORS.lightGreyBackground,
  highlightColor: COLORS.highlight,
  darkBlue: COLORS.darkBlue,
  darkSectionBackground: COLORS.darkBackground,
  paragraphColor: COLORS.offBlack,
  fontFamily: '"Graphik Web"',
  fontFamilySemiBold: '"Graphik Web Semibold"',
  fontFamilyMedium: '"Graphik Web Medium"',
  fontFamilyLight: '"Graphik Web Light"',
  containerMaxWidth: breakPoints.xl,
  containerMinWidth: 375,
  violetBtn: COLORS.violetButton,
  violetBorderBtn: COLORS.violetBorderButton,
  transition: 'all .4s ease',
  primaryBtnBgd: COLORS.primary,
  primaryBtnColor: 'white',
  primaryBtnBgdHover: COLORS.voiletButtonHover,
  headlineSubtitleColor: COLORS.headlineSubtitleColor,
  darkVioletHero: COLORS.darkVioletBackground,
  sectionPadding: '80px 0 100px 0',
  sectonContentPadding: '80px',
  gray: COLORS.gray,
  carouselButton: COLORS.darkGrey,
  mobileCaptionsColor: COLORS.darkGreyBackground,
  lightBtnColor: COLORS.lightBlack,
  lightBtnBgd: COLORS.lightBtnBgd,
  lightBtnBgdHover: COLORS.lightGreyBackground,
  positiveColor: COLORS.green,
  // Font sizes
  fontSizeUltraHeading: FontSizes.ultraHeading,
  fontSizeH1: FontSizes.h1,
  fontSizeH2: FontSizes.h2,
  fontSizeH3: FontSizes.h3,
  fontSizeH4: FontSizes.h4,
  fontSizeBtnText: FontSizes.btnText,
  fontSizeP1: FontSizes.p1,

  // Font weight
  fontWeightUltraHeading: FontWeight.ultraHeading,

  // Line heights
  lineHeightUltraHeading: LineHeights.ultraHeading,
  lineHeightH1: LineHeights.h1,
  lineHeightH2: LineHeights.h2,
  lineHeightH3: LineHeights.h3,
  lineHeightH4: LineHeights.h4,
  lineHeightBtnText: LineHeights.btnText,
  lineHeightP1: LineHeights.p1,

  // letter spacing
  letterSpacingUltraHeading: LetterSpacing.ultraHeading,
  letterSpacingH1: LetterSpacing.h1,

  // margin
  sectionMarginTop: 64,
  sectionMarginBottom: 40,

  // blogs and new
  tileBoxShadow: '0px 2px 2px rgba(0, 0, 0, 0.04)',
  tileBackground: COLORS.white,
  subtitleColor: 'rgba(0, 0, 0, 0.6);',
};

export const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily};
    font-weight: 400;
    font-size: 0.875em;
    line-height: 1.71429;
  }

  img {
    margin: 0;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    /* list-style-type: none; */
  }

  a {
    box-shadow: none;
    text-decoration: none;
    color: ${theme.linkColor};
  }

  p {
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSizeP1};
    line-height: ${theme.lineHeightP1};
    margin: 0 0 16px;
  }
`;
