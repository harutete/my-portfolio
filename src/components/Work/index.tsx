import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const WorkContentsWrapper = styled(ContentsWrapper)`
  background: rgba(255, 205, 159, 0.8);
`
const Work = () => (
  <WorkContentsWrapper>
    <PrimaryHeading>Work</PrimaryHeading>
  </WorkContentsWrapper>
)

export default Work