import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const images = data.allInstaNode.edges.map(({ node }) => node.original)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>COMING SOON....</h1>
      <p>
        Large Photo + About info + whats on the farm + instagram thread at the
        bottom
      </p>
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
    allInstaNode {
      edges {
        node {
          thumbnails {
            src
          }
          original
          mediaType
        }
      }
    }
  }
`
