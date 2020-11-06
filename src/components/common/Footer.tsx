import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const FooterComponent = styled.footer`
    position: relative;
    z-index: 1;
    text-align: center;
    small {
      font-size: 1rem;
    }
  `
  return (
    <FooterComponent>
      <small>&copy; harutete.</small>
    </FooterComponent>
  )
}

export default Footer