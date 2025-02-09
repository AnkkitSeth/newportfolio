import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Thin.otf') format('opentype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Black.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  body {
    font-family: 'Gotham', sans-serif;
    font-weight: 400; /* Default to Regular */
    
  }


`;

export default GlobalStyles;