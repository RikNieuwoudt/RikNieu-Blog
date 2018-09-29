import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div>
        <h1
          style={{
            display: 'inline-block',
            borderBottom: '1px solid',
          }}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {posts.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            <div>{node.frontmatter.title}</div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
