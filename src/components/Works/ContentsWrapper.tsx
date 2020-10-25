import React from 'react'
import styled from 'styled-components'

import { detailContentsWrapper } from '../common/ContentsWrapper'

const WorkContentsWrapper = ({ children }) => {
  const Wrapper = styled(detailContentsWrapper)`
    background: ${({theme}) =>theme.colors.orange};
  `
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default WorkContentsWrapper