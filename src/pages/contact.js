import React from "react"
import { Link } from "gatsby"
import dogs from "../images/lukeleia.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "24px",
      }}
    >
      <img
        src={dogs}
        style={{ width: "1000px", height: "100%", paddingBottom: "24px" }}
      />
      <h1>Have questions or interested in purchasing our products? </h1>
      <h3>Send us an email below</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          action="https://getform.io/f/0dde5e28-86a7-4a9d-b976-55116519c997"
          method="POST"
        >
          <div style={{ paddingBottom: "16px" }}>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div style={{ paddingBottom: "16px" }}>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <textarea
            name="message"
            id="message"
            rows="10"
            cols="100"
            placeholder="Type your message here..."
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "16px",
            }}
          >
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default Contact
