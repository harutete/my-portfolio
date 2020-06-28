import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const ContactContentsWrapper = styled(ContentsWrapper)`
  background: rgba(159, 221, 255, 0.8);
`
const Contact = () => (
  <ContactContentsWrapper>
    <PrimaryHeading>Contact</PrimaryHeading>
  </ContactContentsWrapper>
)

export default Contact