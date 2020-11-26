import React from 'react'
import styled from 'styled-components'

const PrimaryHeading: React.FC = ({ children }) => {
  const Heading = styled.h1`
    color: ${({theme}) => theme.colors.white};
    font-size: 10rem;
    font-family: 'Caveat', cursive;
  `

  return (
    <Heading>
      {children}
    </Heading>
  )
}

export default PrimaryHeading