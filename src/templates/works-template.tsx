import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

import { theme } from '../components/common/theme'
import WorkContentsWrapper from '../components/Works/ContentsWrapper'
import PrimaryHeading from '../components/common/PrimaryHeading'
import TagList from '../components/Works/TagList'
import ReturnButton from '../components/common/ReturnButton'

const WorkDetailWrap = styled.div`
  background: ${({theme}) => theme.colors.white};
  border-radius: 4px;
  color: ${({theme}) => theme.colors.textColor};
  margin-top: 30px;
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
const LinkButton = styled.a`
  display: block;
  position: relative;
  background: ${({theme}) => theme.colors.orange};
  border-radius: 5px;
  color: ${({theme}) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  width: 80%;
  max-width: 300px;
  margin: 30px auto;
  padding: 15px 30px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%) rotate(45deg);
    transition: right .2s ease 0s;
    border-top: 2px solid ${({theme}) => theme.colors.white};
    border-right: 2px solid ${({theme}) => theme.colors.white};
    width: 10px;
    height: 10px;
  }
  &:hover::before {
    right: 10px;
  }
`

const WorksTemplate = ({ data }) => {
  const workData = data.markdownRemark
  return (
    <>
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
          </WorkDescriptionWrap>
        </WorkDetailWrap>
        <ReturnButton color={theme.colors.orange} />
      </WorkContentsWrapper>
    </>
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