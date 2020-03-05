import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Available = () => (
  <Layout>
    <SEO title="Whats Available" />
    <h1>What we offer</h1>
    <p>
      list of items they sell (honey, eggs, jam) with months that they are
      available, and a link to the contact page if a user is interested in
      purchasing{" "}
    </p>
    <h3>
      Interested in purchasing anything? Fill out our{" "}
      <a href="/contact">Contact</a> form and let us know!
    </h3>
  </Layout>
)

export default Available
