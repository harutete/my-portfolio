import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/common/layouts'
import WorkComponent from '../../components/Work'

const Home = ({ data }) =>
(
  <>
    <Layout />
    <WorkComponent worksData={data} />
  </>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags {
              name
              color
            }
            list_image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Home