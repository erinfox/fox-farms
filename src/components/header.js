import React from "react"
import { Link } from "gatsby"
import Logo from "../../content/images/gatsby-icon.png"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: "transparent",
      zIndex: 2,
      position: "relative",
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
      <div style={{ position: "absolute", left: "0px", top: "-72px" }}>
        <Link to="/">
          <img
            src={Logo}
            style={{ width: "350px", height: "350px", float: "left" }}
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
        ></Link>

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
