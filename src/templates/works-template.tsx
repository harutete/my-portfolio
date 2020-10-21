import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/common/layouts'
import Img from 'gatsby-image'

type TagType = {
  name: string,
  color: string
}
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
const LinkButton = styled.a`
  display: block;
  position: relative;
  background: ${({theme}) => theme.colors.orange};
  border-radius: 4px;
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
    border-top: 2px solid ${({theme}) => theme.colors.white};
    border-right: 2px solid ${({theme}) => theme.colors.white};
    width: 15px;
    height: 15px;
  }
`

const WorksTemplate = ({ data }) => {
  const workData = data.markdownRemark
  console.log({workData})
  const tagStyle = (color: string) => ({
    borderColor: color,
    color: color
  })
  return (
    <>
      <Layout />
      <div>
        <h1>{workData.frontmatter.title}</h1>
        <Img fluid={workData.frontmatter.featuredImage.childImageSharp.fluid} />
        <TagsList>
          {workData.frontmatter.tags.map((tag: TagType, index: number) =>
            (
              <li key={`${index}`} style={tagStyle(tag.color)}>
                {tag.name}
              </li>
            )
          )}
        </TagsList>
        <div dangerouslySetInnerHTML={{ __html: workData.html }} />
        {workData.frontmatter.link && <LinkButton href={workData.frontmatter.link}>Code on Github</LinkButton>}
      </div>
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