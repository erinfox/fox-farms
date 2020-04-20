import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1700,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "auto",
            paddingBottom: "32px",
            paddingTop: "32px",
          }}
        >
          <footer> ©{new Date().getFullYear()} FOX FARMS</footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
