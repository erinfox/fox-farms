import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="blog" />
    <h1 style={{ display: "flex", justifyContent: "center" }}>Farm Updates</h1>
    <p>blog posts from contentful!</p>
  </Layout>
)

export default Blog

// need to set up a webhook to connect conntentful to graphiql
// set up netlify / contentful webhook url
// make it live on netlify  (like staging)
