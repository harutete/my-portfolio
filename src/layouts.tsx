import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

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
  background: #FFFAF3;
  color: #333333;
  font-family: 'Noto Sans JP', sans-serif;
}
`

const Layout = ({children: any}) => (
  <React.Fragment>
    <GlobalStyle />
  </React.Fragment>
)

export default Layout