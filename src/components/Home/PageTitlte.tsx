import React from 'react'
import styled from 'styled-components'

const PageTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

  font-family: 'Caveat', cursive;
  font-size: 10rem;
  font-weight: bold;
`

const PageSubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

  font-family: 'Caveat', cursive;
  font-size: 5.5rem;
  margin-top: 20px;
`

const PagetitleWrapper = () => {
  return (
    <div>
      <PageTitle>AI TAKEUCHI's<br />
      Portforio</PageTitle>
      <PageSubTitle>Frontend Engineer.</PageSubTitle>
    </div>
  )
}

export default PagetitleWrapper