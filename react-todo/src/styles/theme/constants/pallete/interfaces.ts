
import { PaletteOptions, Color } from '@mui/material';

export interface CustomPaletteOptions extends PaletteOptions {
    accent: {
        primary: string;
    };
    backgroundLight: {
        primary: string;
    };
    backgroundDark: {
        primary: string;
    };
    textDark: {
        primary: string;
    };
    textLight: {
        primary: string;
    };
}


import '@mui/material/styles';

declare module '@mui/material/styles' {

  interface PaletteColor extends Color {}
  interface Palette {
    primary: Palette['primary'];
    secondary: Palette['primary'];
    accent: Palette['primary'];
    textDark: Palette['primary'];
    textLight: Palette['primary'];
    backgroundDark: Palette['primary'];
    backgroundLight: Palette['primary'];
  }
}

