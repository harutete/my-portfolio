import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Caveat', cursive;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  padding-left: 50px;
  ${media.lessThan('large')`
    text-align: center;
    padding-left: 0;
    height: 100%;
  `}
`
const PageTitle = styled.h1`
  font-size: 10rem;
  font-weight: bold;
  ${media.lessThan('large')`
    font-size: 8rem;
  `}
`

const PageSubTitle = styled.p`
  font-size: 5.5rem;
  margin-top: 20px;
  ${media.lessThan('large')`
    font-size: 3rem;
  `}
`

const PagetitleWrapper: React.FC = () => {
  return (
    <Wrapper>
      <PageTitle>Harutete's<br />
      Portforio</PageTitle>
      <PageSubTitle>Frontend Engineer.</PageSubTitle>
    </Wrapper>
  )
}

export default PagetitleWrapper