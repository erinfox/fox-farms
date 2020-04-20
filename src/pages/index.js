import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Logo from "../images/gatsby-icon.png"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const images = data.allInstaNode.edges.map(({ node }) => node.original)
  return (
    <Layout>
      <SEO title="Home" />
      {images.map(image => (
        <img
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
          key={image}
          src={image}
        />
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    allInstaNode(limit: 10, filter: { mediaType: { eq: "GraphImage" } }) {
      edges {
        node {
          thumbnails {
            src
          }
          original
        }
      }
    }
  }
`
