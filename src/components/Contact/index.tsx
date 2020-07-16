import React from 'react'
import styled from 'styled-components'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const ContactContentsWrapper = styled(detailContentsWrapper)`
  background: rgba(159, 221, 255, 0.8);
`
const AddressText = styled.p`
  font-size: 1.8rem;
  margin-top: 20px;
`
const AnnotationText = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  sup {
    margin-right: 5px;
  }
`

const Contact = () => (
  <ContactContentsWrapper>
    <PrimaryHeading>Contact</PrimaryHeading>
    <AddressText>ai.takeuchi.10 [at] gmail.com</AddressText>
    <AnnotationText><sup>*</sup>at → @</AnnotationText>
  </ContactContentsWrapper>
)

export default Contact