import { red, blue, lightBlue, yellow, green, grey } from '@material-ui/core/colors';
import { PaletteType } from '@material-ui/core';

const white = '#FFF';
const black = '#000';

const palleteOptions = {
  type: 'dark' as PaletteType,
  common: {
    black,
    white,
  },
  default: {
    light: 'rgba(41, 150, 243, .1)',
    main: 'rgba(0, 40, 73, .9)',
    dark: 'rgb(0, 40, 73)',
    logoBg: 'rgb(51, 51, 51)',
    border: 'rgba(0, 40, 73, .1)',
    contrastText: white,
  },
  primary: {
    light: lightBlue[300],
    main: lightBlue[500],
    dark: lightBlue[700],
    contrastText: white,
  },
  secondary: {
    light: yellow[300],
    main: yellow[500],
    dark: yellow[700],
    contrastText: white,
  },
  success: {
    light: green[300],
    main: green[500],
    dark: green[700],
    contrastText: white,
  },
  info: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
    contrastText: white,
  },
  warning: {
    light: yellow[300],
    main: yellow[500],
    dark: yellow[700],
    contrastText: white,
  },
  danger: {
    light: red[300],
    main: red[500],
    dark: red[700],
    contrastText: white,
  },
  background: {
    paper: 'rgb(60, 60, 60)',
    default: 'rgb(45, 45, 45)',
  },
  text: {
    secondary: grey[400],
  },
  border: '#DFE3E8',
  oxfordBlue: 'rgba(5, 41, 73, 1)',
  prussianBlue: 'rgba(19, 49, 92, 1)',
  darkCerulean: 'rgba(19, 64, 116, 1)',
  pewterBlue: 'rgba(141, 169, 196, 1)',
  isabelline: 'rgba(238, 244, 237, 1)',
};
export default palleteOptions;
