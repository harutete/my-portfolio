import React from 'react'
import styled from 'styled-components'
import myWorks from '../../../content/myWorks.json'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const WorkContentsWrapper = styled(detailContentsWrapper)`
  background: rgba(255, 205, 159, 0.8);
`
const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  background: #ffffff;
  border-radius: 5px;
  color: #333333;
  width: 280px;
  margin: 30px 0 0 30px;
`
const CardImage = styled.div`
  background: #cccccc;
  height: 200px;
`
const CardDescription = styled.div`
  padding: 0 15px 15px;
`
const CardTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 15px;
`
const TagsList = styled.ul`
  list-style: none;
  margin-left: -5px;
  li {
    border-radius: 2px;
    margin: 10px 0 0 5px;
  }
`
const Work = () => (
  <WorkContentsWrapper>
    <PrimaryHeading>Work</PrimaryHeading>
    <CardWrap>
      {myWorks.works.map((work, index) =>
        <Card key={`woprk_${index}`}>
          <CardDescription>
            <CardTitle>{work.name}</CardTitle>
            <TagsList>
              {work.tags.map((tag, index) =>
                <li key={`tag_${index}`}>
                  {tag.name}
                </li>
              )}
            </TagsList>
          </CardDescription>
          <CardImage></CardImage>
        </Card>
      )}
    </CardWrap>
  </WorkContentsWrapper>
)

export default Work