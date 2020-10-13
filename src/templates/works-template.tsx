import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/common/layouts'

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

const WorksTemplate = ({ data }) => {
  const post = data.markdownRemark
  const tagStyle = (color: string) => ({
    borderColor: color,
    color: color
  })
  return (
    <>
      <Layout />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <TagsList>
          {post.frontmatter.tags.map((tag: TagType, index: number) =>
            (
              <li key={`${index}`} style={tagStyle(tag.color)}>
                {tag.name}
              </li>
            )
          )}
        </TagsList>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`
export default WorksTemplate