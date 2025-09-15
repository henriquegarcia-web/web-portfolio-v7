import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent !important;
    
    /* font-family: "Roboto", sans-serif; */
    font-family: "Montserrat", sans-serif;
    /* font-family: "Barlow", sans-serif; */

  }

  html {
    scroll-behavior: smooth;
  }
`
