import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

import Footer from './Footer'

const baseWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`
export const ContentsWrapper:React.FC = (props) => {
  const Wrap = styled(baseWrap)``

  return (
    <Wrap {...props}>
      {props.children}
      <Footer />
    </Wrap>
  )
}

export const detailContentsWrapper:React.FC = (props) => {
  const Wrap = styled(baseWrap)`
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    color: ${({theme}) => theme.colors.white};
    ${media.lessThan('medium')`
      padding: 30px;
    `}
  `

  return (
    <Wrap {...props}>
      {props.children}
      <Footer />
    </Wrap>
  )
}
