/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styles from "./homepage.module.scss"
import { BasicLayout } from "../basic-layout/basic-layout"

const Layout = ({ children }) => (
  <BasicLayout className={styles.homepageWrapper}>{children}</BasicLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
