import { ukUA as MaterialLocale } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

import customBreakpoints from './constants/breakpoints';
import customPalette from './constants/pallete';
import customTypography from './constants/typography';

const theme = createTheme({
    palette: customPalette,
    typography: customTypography,
    breakpoints: customBreakpoints,
  },
  MaterialLocale,
);

export default theme;