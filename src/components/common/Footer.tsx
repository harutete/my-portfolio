import React from 'react'
import styled from 'styled-components'

type Props = {
  isTextLight: boolean
}
const FooterComponent = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  padding: 5px 0;
  small {
    font-size: 1rem;
    text-shadow: 1px 1px 1px ${({theme}) => theme.colors.white};
    &.is-text-light {
      color: ${({ theme }) => theme.colors.white};
      text-shadow: none;
    }
  }
`
const Footer: React.FC<Props> = ({ isTextLight }) =>
(
  <FooterComponent>
    <small className={isTextLight ? 'is-text-light' : ''}>
      &copy; 2020 harutete.
    </small>
  </FooterComponent>
)

export default Footer