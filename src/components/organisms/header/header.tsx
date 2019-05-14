import React from "react"
import { StyledLink } from "../../atoms/styled-link/styled-link"
import styles from "./header.module.scss"
import { NavMenu } from "../../molecules/nav-menu/nav-menu";
export const Header = ({ siteTitle = "" }) => (
  <header className={styles.header}>
      <StyledLink to="/">
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </StyledLink>
      <NavMenu/>
  </header>
)
