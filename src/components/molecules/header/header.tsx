import React from "react"
import { Link } from "gatsby"
import { StyledLink } from "../../atoms/styled-link/styled-link"
import { IconTwitter, IconFacebook, IconGithub } from "../../atoms/icons/icons"
import styles from "./header.module.scss"
import { NavMenu } from "../nav-menu/nav-menu";
export const Header = ({ siteTitle = "" }) => (
  <header className={styles.header}>
      <StyledLink to="/">
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </StyledLink>
      <NavMenu/>
  </header>
)
