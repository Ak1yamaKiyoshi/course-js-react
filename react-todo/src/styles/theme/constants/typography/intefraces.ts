import { CSSProperties } from 'react';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1Medium: CSSProperties;
    h2Medium: CSSProperties;
    h3Medium: CSSProperties;
    h4Medium: CSSProperties;
    h5Medium: CSSProperties;
    h5Regular: CSSProperties;
    pRegular: CSSProperties;
    smallRegular: CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Medium?: CSSProperties;
    h2Medium?: CSSProperties;
    h3Medium?: CSSProperties;
    h4Medium?: CSSProperties;
    h5Medium?: CSSProperties;
    h5Regular?: CSSProperties;
    pRegular?: CSSProperties;
    smallRegular?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Medium: true;
    h2Medium: true;
    h3Medium: true;
    h4Medium: true;
    h5Medium: true;
    h5Regular: true;
    pRegular: true;
    smallRegular: true;
  }
}

