const colors = {
  uber_blue: '#19CDD7',
  mule_fawn: '#88572C',
  flame: '#F15C17',
  sapphire: '#223F9A',
  orchid: '#DA70BF',
  chathams_blue: '#125C77',
  med_aquamarine: '#4DC19C',
  crocodile: '#776E57',
  aqua: '#12939A',
  java: '#17B8BE',
  chalky: '#F6D18A',
  light_taupe: '#B7885E',
  portage: '#829AE3',
  light_orchid: '#E79FD5',
  blue_green: '#1E96BE',
  bermuda: '#89DAC1',
  cloudy: '#B3AD9E',
  // tumbleweed: '#DDB27C',
  // apricot: '#F89570',
  // tree_poppy: '#FF991F',
  // peach_orange: '#FFCB99',
}

const colorKeys = Object.keys(colors)

export const getRandom = () => colors[colorKeys[(colorKeys.length * Math.random()) << 0]]

export default colors
