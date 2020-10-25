import React from 'react'
import styled from 'styled-components'
type PropType = {
  frontmatter: any
}
const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.white};
  border-radius: 4px;
  color: ${({theme}) => theme.colors.textColor};
  width: 90%;
  max-width: 800px;
  min-width: 300px;
  margin: 30px auto 0;
  padding: 15px;
`

const Title = styled.h2`
  font-size: 3rem;
`

const DetailContents: React.FC<PropType> = (props) => (
  <Wrapper>
    <Title>{props.frontmatter.title}</Title>
  </Wrapper>
)

export default DetailContents