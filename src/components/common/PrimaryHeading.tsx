import React from 'react'
import styled from 'styled-components'

const PrimaryHeading = ({children}) => {
  const Heading = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

    color: #ffffff;
    font-size: 5rem;
    font-family: 'Caveat', cursive;
    text-align: center;
  `

  return (
    <Heading>
      {children}
    </Heading>
  )
}

export default PrimaryHeading