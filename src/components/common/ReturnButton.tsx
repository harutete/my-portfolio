import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ReturnButton = () => {
  const Button = styled(Link)`
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
      <Button to="/">Back</Button>
    </div>
  )
}

export default ReturnButton