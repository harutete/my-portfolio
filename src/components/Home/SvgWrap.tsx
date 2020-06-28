import React from 'react'
import styled from 'styled-components'

type Props = {
  width: string,
  height: string,
  viewBox: string,
}

const SvgWrap: React.FC<Props> = (props) => {
  const Wrap = styled.svg`
    display: block;
  `
  const SvgWidth = props.width || 0
  const SvgHeight = props.height || 0
  const SvgViewBox = props.viewBox || '0, 0, 0, 0'

  return (
    <Wrap
      width={SvgWidth}
      height={SvgHeight}
      viewBox={SvgViewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </Wrap>
  )
}

export default SvgWrap
