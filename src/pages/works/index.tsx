import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/common/layouts'
import WorkComponent from '../../components/Work'

const Home = ({ data }) =>
(
  <>
    <Layout />
    <WorkComponent works="data" />
  </>

    // <div>
    //   <h1>
    //     Amazing Pandas Eating Things
    //   </h1>
    //   <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    //   {data.allMarkdownRemark.edges.map(({ node }) => (
    //     <div key={node.id}>
    //       <h3>
    //         {node.frontmatter.title}{" "}
    //         <span>
    //           — {node.frontmatter.date}
    //         </span>
    //       </h3>
    //       <p>{node.excerpt}</p>
    //     </div>
    //   ))}
    // </div>
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
          }
          excerpt
        }
      }
    }
  }
`

export default Home