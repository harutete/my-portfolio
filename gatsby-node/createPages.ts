import path from 'path'
import { GatsbyNode } from 'gatsby'
import { MarkdownRemarkConnection } from '../types/graphql-types'

type Result = {
  allMarkdownRemark: MarkdownRemarkConnection
}

const query = `
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions
  const result = await graphql<Result>(query)
  if (!result || !result.data) {
    throw new Error('undefined data')
  }
  const { edges } = result.data.allMarkdownRemark
  if (!edges) {
    throw new Error('undefined edges')
  }
  edges.forEach(({ node }) => {
    if (!node || !node.fields) {
      throw new Error('undefined node')
    }
    createPage({
      path: node.fields.slug!.toString(),
      component: path.resolve(`./src/templates/works-template.tsx`),
      context: {
        slug: node.fields.slug!,
      },
    })
  })
}