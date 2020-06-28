import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'
import PagetitleWrapper from './PageTitlte'
import Navigation from './Navigation'

const HomeContentsWrapper = styled(ContentsWrapper)`
  display: flex;
  flex-direction: column;
`
const Home = () => (
  <HomeContentsWrapper>
    <PagetitleWrapper />
    <Navigation />
  </HomeContentsWrapper>
)

export default Home