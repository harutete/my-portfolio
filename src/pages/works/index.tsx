import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/common/layouts'
import WorkComponent from '../../components/Works'

const Home = ({ data }) =>
(
  <Layout>
    <WorkComponent worksData={data} />
  </Layout>
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags {
              name
              color
            }
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