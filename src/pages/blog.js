import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="blog" />
    <h1>Hi from the blog page</h1>
    <p>blog posts from contentful!</p>
  </Layout>
)

export default Blog