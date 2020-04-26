import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const images = data.allInstaNode.edges.map(({ node }) => node.original)
  const billboard = data.billboard
  return (
    <Layout>
      <SEO title="Home" />
      <Image
        fluid={billboard.childImageSharp.fluid}
        style={{ width: "100%", height: "100%" }}
      />
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
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
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
    billboard: file(absolutePath: { regex: "/farmHouse.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
