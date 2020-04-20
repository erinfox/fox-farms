import React from "react"
import { Link, graphql } from "gatsby"
import farmHouse from "../images/farmHouse.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const images = data.allInstaNode.edges.map(({ node }) => node.original)
  return (
    <Layout>
      <SEO title="Home" />
      <img src={farmHouse} style={{ width: "100%", height: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingRight: "100px",
          paddingLeft: "100px",
          flexDirection: "column",
        }}
      >
        <h1>“Let’s buy a farm,“ she said. “It will be fun!” </h1>
        <h1>“Let’s buy some sheep,“ she said. “It will be fun!”</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {images.map(image => (
          <img
            style={{ width: "275px", height: "275px", objectFit: "cover" }}
            key={image}
            src={image}
            // link={"https://www.instagram.com/foxfarms17924/"} ??????????????????
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    allInstaNode(limit: 5, filter: { mediaType: { eq: "GraphImage" } }) {
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
