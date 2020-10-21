import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'
import TagList from './TagList'
import ReturnButton from '../common/ReturnButton'

const WorkContentsWrapper = styled(detailContentsWrapper)`
  background: ${({theme}) => rgba(theme.colors.orange, 0.8)};
  &::after {
    background: ${({theme}) => rgba(theme.colors.orange, 0.8)};
  }
`
const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  overflow: hidden;
  background: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  color: ${({theme}) => theme.colors.textColor};
  width: 280px;
  margin: 30px 0 0 30px;
`
const CardDescription = styled.div`
  padding: 0 15px 15px;
`
const CardTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 15px;
  a {
    color: ${({theme}) => theme.colors.textColor};
    text-decoration: none;
  }
`
const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -5px;
  li {
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    margin: 10px 0 0 5px;
    padding: 2px 5px;
  }
`

const Work = ({ worksData }) => (
  <WorkContentsWrapper>
    <PrimaryHeading>Work</PrimaryHeading>
    <CardWrap>
      {worksData.allMarkdownRemark.edges.map(({ node }) => (
        <Card key={`woprk_${node.id}`}>
          <CardDescription>
            <CardTitle>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </CardTitle>
            <TagList data={node.frontmatter.tags} />
          </CardDescription>
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        </Card>
      ))}
    </CardWrap>
    <ReturnButton />
  </WorkContentsWrapper>
)

export default Work