import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { theme } from './theme'

const ReturnButton: React.FC = () => {
  const Button = styled(AniLink)`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%) rotate(-90deg);
    color: ${({theme}) => theme.colors.white};
    font-size: 2rem;
    text-decoration: none;
  `

  return (
    <div>
      <Button
        paintDrip
        hex={theme.colors.beige}
        to="/"
      >Back</Button>
    </div>
  )
}

export default ReturnButton