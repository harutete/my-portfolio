import React from 'react'
import styled from 'styled-components'
import media from "styled-media-query";
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'

import { theme } from '../common/theme'
import WorkContentsWrapper from './ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'
import TagList from './TagList'
import ReturnButton from '../common/ReturnButton'

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px 0 -30px;
  ${media.lessThan('medium')`
    margin: 0 0 0 -30px;
  `}
`
const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  overflow: hidden;
  background: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  color: ${({theme}) => theme.colors.textColor};
  width: calc(100% / 5 - 30px);
  margin: 30px 0 0 30px;
  ${media.lessThan('large')`
    width: calc(100% / 3 - 30px);
  `}
  ${media.lessThan('medium')`
    width: calc(50% - 30px);
  `}
  ${media.lessThan('small')`
    width: 100%;
  `}
`
const CardDescription = styled.div`
  flex: 1 0 auto;
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
const Work = ({ worksData }) => {
  const sortedWorks = worksData.allMarkdownRemark.edges.sort((a, b) => {
    const slug01 = a.node.fields.slug.split('/')[2]
    const slug02 = b.node.fields.slug.split('/')[2]

    return slug02 - slug01
  })
  return (
    <WorkContentsWrapper>
      <PrimaryHeading>Works</PrimaryHeading>
      <CardWrap>
        {sortedWorks.map(({ node }) => (
          <Card key={`woprk_${node.id}`}>
            <CardDescription>
              <CardTitle>
                <AniLink
                  paintDrip
                  hex={theme.colors.orange}
                  to={node.fields.slug}
                >
                  {node.frontmatter.title}
                </AniLink>
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
}

export default Work