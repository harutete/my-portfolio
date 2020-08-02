import React from 'react'
import styled, { keyframes } from 'styled-components'

const baseWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`
export const ContentsWrapper:React.FC = (props) => {
  const Wrap = styled(baseWrap)``

  return (
    <Wrap {...props}>{props.children}</Wrap>
  )
}

export const detailContentsWrapper:React.FC = (props) => {
  const slideOut =  keyframes`
    0% {
      width: 100vw
    }
    100% {
      width: 0;
    }
  `
  const Wrap = styled(baseWrap)`
    flex-direction: column;
    justify-content: center;
    color: ${({theme}) => theme.colors.white};
    padding: 50px;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      animation: 2s ${slideOut};
      height: 100vh
    }
    &::before {
      background: ${({theme}) => theme.colors.white};
    }
  `

  return (
    <Wrap {...props}>{props.children}</Wrap>
  )
}
