import React from 'react'
import styled from 'styled-components'

const PrimaryHeading = ({children}) => {
  const Heading = styled.h1`
    color: #ffffff;
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