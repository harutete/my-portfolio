import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import { detailContentsWrapper } from '../common/ContentsWrapper'

const WorkContentsWrapper = ({ children }) => {
  const Wrapper = styled(detailContentsWrapper)`
    background: ${({theme}) => rgba(theme.colors.orange, 0.8)};
    &::after {
      background: ${({theme}) => rgba(theme.colors.orange, 0.8)};
    }
  `
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default WorkContentsWrapper