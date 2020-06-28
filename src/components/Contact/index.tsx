import React from 'react'
import styled from 'styled-components'

import ContentsWrapper from '../common/ContentsWrapper'

const ContactContentsWrapper = styled(ContentsWrapper)`
  background: rgba(159, 221, 255, 0.8);
`
const Contact = () => (
  <ContactContentsWrapper>
    <h1>Contact</h1>
  </ContactContentsWrapper>
)

export default Contact