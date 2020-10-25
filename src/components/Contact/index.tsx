import React from 'react'
import styled from 'styled-components'

import { theme } from '../common/theme'
import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'
import ReturnButton from '../common/ReturnButton'

const ContactContentsWrapper = styled(detailContentsWrapper)`
  background: ${({theme}) => theme.colors.blue};
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
    <ReturnButton color={theme.colors.blue} />
  </ContactContentsWrapper>
)

export default Contact