import React from 'react'
import { graphql } from "gatsby"
import { WorksPageQuery } from '../../../types/graphql-types'

import Layout from '../../components/common/layout'
import WorkComponent from '../../components/Works'

type Props = {
  data: WorksPageQuery
}

const Works: React.FC<Props> = ({ data }) =>
(
  <Layout title="works" description="制作物の一覧です">
    <WorkComponent worksData={data} />
  </Layout>
)

export const query = graphql`
  query WorksPage {
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

export default Works