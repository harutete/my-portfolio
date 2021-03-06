import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { theme } from './theme'
import 'typeface-caveat'

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({theme}) => theme.colors.beige};
    color: ${({theme}) => theme.colors.textColor};
    font-family: "Helvetica Neue",
      Arial,
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      Meiryo,
      sans-serif;
  }
  img {
    max-width: 100%;
  }
`

export const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={ theme }>
    <GlobalStyle />
    { children }
  </ThemeProvider>
)

export default Provider