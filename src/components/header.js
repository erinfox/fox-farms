import React from "react"
import { Link } from "gatsby"
const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: "transparent",
      // marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        background: "transparent",
        // marginBottom: "1.45rem",
        borderBottom: "1px solid gray",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 1000,
          // padding: "1.45rem 1.0875rem",
          display: "flex",
          // justifyItems: "space-between",
          // alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1 }}>
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
                // flex: 1,
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
