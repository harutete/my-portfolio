import React from 'react'
import styled from 'styled-components'
import 'typeface-caveat'

import Head from './Head'
import Footer from './Footer'

type Props = {
  title: string,
  description: string
  isTextLight: boolean
}

const Wrapper = styled.div`
  position: relative;
`

const Layout: React.FC<Props> = (props) => (
  <Wrapper>
    <Head title={ props.title } description={props.description} />
    { props.children }
    <Footer isTextLight={props.isTextLight} />
  </Wrapper>
)

export default Layout