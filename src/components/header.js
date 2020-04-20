import React from "react"
import { Link } from "gatsby"
import Logo from "../images/gatsby-icon.png"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: "transparent",
    }}
  >
    <div
      style={{
        background: "transparent",
        borderBottom: "1px solid gray",
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        paddingTop: "16px",
        paddingBottom: "8px",
      }}
    >
      <div style={{ position: "absolute", left: "0px", top: "-45px" }}>
        <Link to="/">
          <img
            src={Logo}
            style={{ width: "250px", height: "250px", float: "left" }}
          />
        </Link>
      </div>

      <nav>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <h1
            style={{
              marginBottom: "0px",
              display: "flex",
              flex: " 0 1 auto",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            FOX FARMS
          </h1>
        </Link>

        <ul
          style={{
            display: "flex",
            float: "right",
            paddingRight: "60px",
            paddingTop: "12px",
          }}
        >
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                paddingLeft: 12,
                paddingRight: 12,
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
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
