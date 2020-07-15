import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'
import PagetitleWrapper from './PageTitlte'
import Navigation from './Navigation'

const HomeContentsWrapper = styled(ContentsWrapper)`
  & > * {
    width: 50%;
  }
`
const Home = () => (
  <HomeContentsWrapper>
    <PagetitleWrapper />
    <Navigation />
  </HomeContentsWrapper>
)

export default Home