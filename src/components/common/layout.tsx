import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { theme } from './theme'
import 'typeface-caveat'

import Head from './Head'

type Props = {
  title: string,
  description: string
}
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

export const Layout: React.FC<Props> = (props) => {
  return (
  <ThemeProvider theme={ theme }>
    <GlobalStyle />
    <Head title={ props.title } description={props.description} />
    { props.children }
  </ThemeProvider>
)
  }
export default Layout