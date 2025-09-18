import { createGlobalStyle } from 'styled-components'
import { theme } from '../constants'

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: 12px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
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
    
    font-family: "Roboto", sans-serif;
    /* font-family: "Montserrat", sans-serif; */
    /* font-family: "Barlow", sans-serif; */
    /* font-family: "Changa", sans-serif; */
    /* font-family: "Smooch Sans", sans-serif; */
    /* font-family: "Saira", sans-serif; */
    /* font-family: "Exo", sans-serif; */
    /* font-family: "Hubot Sans", sans-serif; */
    
    font-family: "Rubik", sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${theme.colors.background.primary};
    color: ${theme.colors.text.primary};
    overflow-x: hidden;
    position: relative;
  }
`
