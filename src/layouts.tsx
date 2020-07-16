import React from 'react'
import { createGlobalStyle } from 'styled-components'
import "typeface-caveat"

const GlobalStyle = createGlobalStyle`
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
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
`

const Layout = () => (
  <React.Fragment>
    <GlobalStyle />
  </React.Fragment>
)

export default Layout