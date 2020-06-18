import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

font-family: 'Caveat', cursive;
text-shadow: 0 2px 4px rgba(0, 0, 0, .25);
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
      <PageTitle>AI TAKEUCHI's<br />
      Portforio</PageTitle>
      <PageSubTitle>Frontend Engineer.</PageSubTitle>
    </Wrapper>
  )
}

export default PagetitleWrapper