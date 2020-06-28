import React from 'react'
import styled from 'styled-components'

const ContentsWrapper:React.FC = (props) => {
  const Wrap = styled.div`
    overflow: hidden;
    position: relative;
    height: 100vh;
  `

  return (
    <Wrap {...props}>{props.children}</Wrap>
  )
}

export default ContentsWrapper