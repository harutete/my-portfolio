import React from 'react'
import styled from 'styled-components'

const baseWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 100vh;
`
export const ContentsWrapper:React.FC = (props) => {
  const Wrap = styled(baseWrap)``

  return (
    <Wrap {...props}>{props.children}</Wrap>
  )
}

export const detailContentsWrapper:React.FC = (props) => {
  const Wrap = styled(baseWrap)`
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
  `

  return (
    <Wrap {...props}>{props.children}</Wrap>
  )
}
