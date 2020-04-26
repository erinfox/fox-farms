import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => {
  const billboard = data.billboard

  return (
    <Layout>
      <SEO title="Contact" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "100px",
        }}
      >
        <h1>Have questions or interested in purchasing our products? </h1>
        <h3>Send us an email: </h3>
        <h2>foxfarms17924@gmail.com</h2>
      </div>
      <Image
        fluid={billboard.childImageSharp.fluid}
        style={{ width: "100%", height: "100%" }}
      />
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query ContactQuery {
    billboard: file(absolutePath: { regex: "/lukeleia.png/" }) {
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
