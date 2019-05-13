import React from "react"
import { Link } from "gatsby"
import { StyledLink } from "../../atoms/styled-link/styled-link"
import { IconTwitter, IconFacebook, IconGithub } from "../../atoms/icons/icons"
import styles from "./header.module.scss"
export const Header = ({ siteTitle = "" }) => (
  <header className={styles.header}>
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <StyledLink to="/">
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </StyledLink>
      <div className={styles.links}>
        <ul className={styles.internal}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog">Blog</StyledLink>
          </li>
          <li>
            <StyledLink to="/store">Store</StyledLink>
          </li>
        </ul>
        <ul className={styles.social}>
          <li>
            <a href="https://www.twitter.com">
              <IconTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <IconFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <IconGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
)
