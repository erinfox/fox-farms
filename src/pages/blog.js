import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="blog" />
    <h1
      style={{ display: "flex", justifyContent: "center", paddingTop: "140px" }}
    >
      COMING SOON!
    </h1>
  </Layout>
)

export default Blog

// need to set up a webhook to connect conntentful to graphiql
// set up netlify / contentful webhook url
// make it live on netlify  (like staging)
