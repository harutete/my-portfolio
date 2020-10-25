import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Caveat', cursive;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  padding-left: 50px;
`
const PageTitle = styled.h1`
  font-size: 10rem;
  font-weight: bold;
`

const PageSubTitle = styled.p`
  font-size: 5.5rem;
  margin-top: 20px;
`

const PagetitleWrapper = () => {
  return (
    <Wrapper>
      <PageTitle>Harutete's<br />
      Portforio</PageTitle>
      <PageSubTitle>Frontend Engineer.</PageSubTitle>
    </Wrapper>
  )
}

export default PagetitleWrapper