import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mailbox from "../images/mail.jpeg"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Have any questions? </h1>
      <img src={Mailbox} style={{ width: "450px" }} />
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          action="https://getform.io/f/0dde5e28-86a7-4a9d-b976-55116519c997"
          method="POST"
        >
          <label>
            Name:
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message:
            <textarea name="message" id="message" rows="5" />
          </label>
          <div>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default Contact
