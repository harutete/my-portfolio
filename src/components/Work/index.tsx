import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'

const WorkContentsWrapper = styled(ContentsWrapper)`
  background: rgba(255, 205, 159, 0.8);
`
const Work = () => (
  <WorkContentsWrapper>
    <h1>Work</h1>
  </WorkContentsWrapper>
)

export default Work