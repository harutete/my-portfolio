import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/common/layouts'

import WorkContentsWrapper from '../components/Works/ContentsWrapper'
import PrimaryHeading from '../components/common/PrimaryHeading'
import TagList from '../components/Works/TagList'
import LinkButton from '../components/Works/detail/LinkButton'
import ReturnButton from '../components/common/ReturnButton'

const WorkDetailWrap = styled.div`
  background: ${({theme}) => theme.colors.white};
  border-radius: 4px;
  color: ${({theme}) => theme.colors.textColor};
  width: 85%;
  max-width: 800px;
  min-width: 300px;
  margin: 30px auto 0;
  padding: 15px;
  h2 {
    font-size: 3rem;
  }
`
const WorkDescriptionWrap = styled.div`
  margin-top: 20px;
`
const Description = styled.div`
  margin-top: 20px;
  p {
    font-size: 1.6rem;
  }
`
const WorkImageWrap = styled.div`
  margin-top: 20px;
`

const WorksTemplate = ({ data }) => {
  const workData = data.markdownRemark
  return (
    <Layout>
      <WorkContentsWrapper>
        <PrimaryHeading>Works</PrimaryHeading>
        <WorkDetailWrap>
          <h2>{workData.frontmatter.title}</h2>
          <WorkImageWrap>
            <Img fluid={workData.frontmatter.featuredImage.childImageSharp.fluid} />
          </WorkImageWrap>
          <WorkDescriptionWrap>
            <TagList data={workData.frontmatter.tags} />
            <Description dangerouslySetInnerHTML={{ __html: workData.html }} />
            {workData.frontmatter.link &&
              <LinkButton href={workData.frontmatter.link}>Code on Github</LinkButton>
            }
            <LinkButton href="/works/">Back to Works</LinkButton>
          </WorkDescriptionWrap>
        </WorkDetailWrap>
        <ReturnButton />
      </WorkContentsWrapper>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags {
          name
          color
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        link
      }
    }
  }
`
export default WorksTemplate