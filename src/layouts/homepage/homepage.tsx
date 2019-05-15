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

type props = {
  children: React.ReactNode
  beforeContent?: React.ReactNode
}

const Layout = ({ children, beforeContent }: props) => (
  <BasicLayout beforeContent={beforeContent} className={styles.homepageWrapper}>
    {children}
  </BasicLayout>
)

export default Layout
