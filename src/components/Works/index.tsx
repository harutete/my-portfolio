import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { theme } from '../common/theme'
import WorkContentsWrapper from './ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'
import TagList from './TagList'
import ReturnButton from '../common/ReturnButton'

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
const Work = ({ worksData }) => (
  <WorkContentsWrapper>
    <PrimaryHeading>Works</PrimaryHeading>
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
    <ReturnButton color={theme.colors.orange} />
  </WorkContentsWrapper>
)

export default Work