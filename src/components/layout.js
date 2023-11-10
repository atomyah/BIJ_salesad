import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
//import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Search from "./Search"
import Navbar from "./Navbar/Navbar"

import { Helmet } from "react-helmet"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RWBXELGG0V"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RWBXELGG0V');
          `}
        </script>
      </Helmet>

      <style type="text/css">
        {`
    .input-empty {
      display:none
    }
    .input-value {
      border: 1px solid black;
    }
    `}
      </style>

      <Navbar siteTitle={data.site.siteMetadata.title} />
      <Search />
      <div
        style={{
          margin: `0 auto`,
          marginTop: 20,
          maxWidth: 1024,
          // border: `solid 1px #000`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
