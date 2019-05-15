/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styles from "./basic-layout.module.scss"
import "./layout.scss"
import { Header } from "../../components/organisms/header/header"
import { Hero } from "../../components/molecules/hero/hero"
import { Footer } from "../../components/molecules/footer/footer"

type props = {
  children: React.ReactNode
  className?: string
  beforeContent?: React.ReactNode
}

export function BasicLayout({ children, className, beforeContent }: props) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          {beforeContent}
          <div className={`${styles.wrapper} ${className}`}>
            <main>{children}</main>
          </div>
          <Footer />
        </>
      )}
    />
  )
}
