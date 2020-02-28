import React from "react"
import { Link } from "gatsby"
const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: "transparent",
      // marginTop:
    }}
  >
    <div
      style={{
        background: "transparent",
        borderBottom: "1px solid gray",
        // overflow: "hidden",
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1300px",
          display: "flex",
        }}
      >
        <h1
          style={{
            margin: 0,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: 10,
                  }}
                >
                  <Link style={{ color: `black` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
