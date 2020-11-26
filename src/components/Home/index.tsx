import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

import { ContentsWrapper } from '../common/ContentsWrapper'
import PagetitleWrapper from './PageTitlte'
import Navigation from './Navigation/NavigationWrap'

const HomeContentsWrapper = styled(ContentsWrapper)`
  ${media.greaterThan('large')`
    flex-direction: row-reverse;
    & > * {
      width: 50%;
    }
  `}
  ${media.lessThan('large')`
    flex-direction: column-reverse;
    justify-content: center;
    height: 100%;
    & > * {
      width: 100%;
    }
  `}
`
const Home: React.FC = () => (
  <HomeContentsWrapper>
    <Navigation />
    <PagetitleWrapper />
  </HomeContentsWrapper>
)

export default Home