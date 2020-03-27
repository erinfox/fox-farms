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
      <div>
        <div>
          <img
            src={Logo}
            style={{ width: "250px", height: "250px", float: "left" }}
          />
          <p style={{ paddingTop: "55px" }}>
            Fox Farms is a natural organic farm established in 2015 along the
            Delta on the Sacramento Rivier. Among our farm animals we have
            sheep, chickens and bees. We have a small herd of sheep, livestock
            guardian dogs, Luke and Leia, and border collies Bob and Ann. and a
            few barn cats.{" "}
          </p>
          <p>
            On 23 acres, our farmhouse was built in 1898 with additional
            construction in 1935. This belonged to some of the original families
            that farmed on this property. When we purchased the property we
            completely refurbished the house from the ground up. Even purchasing
            an original Wedgewood stove for the farm kitchen resulting in many
            canning jars of jam and vegetables.{" "}
          </p>
          <p>
            After aquiring the place and retiring to live on it we decided that
            our focus would be on a small herd of sheep for their wool, milk,
            and to try breeding them. They are amazing to watch and learn from.{" "}
          </p>
          <p>
            As first generation farmers we are proud of what we have
            accomplished in a few short years. Currently we breed, produce and
            sell sheep, (their wool and meat) blackberry jam (the berries grow
            wild on the property) and honey (we currently have four hives
            producing honey and eggs from our crazy chickens.
          </p>
        </div>
      </div>
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
