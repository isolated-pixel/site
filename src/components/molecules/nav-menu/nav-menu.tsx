import React, { useState } from "react"
import styles from "./nav-menu.module.scss"
import { IconMenu, IconExit } from "../../atoms/icons/icons"
import { StyledLink } from "../../atoms/styled-link/styled-link"
import { SocialLinks } from "../social-links/social-links"

export function NavMenu() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <span
        className={styles.burger}
        onClick={() => {
          setVisible(!visible)
        }}
      >
        <IconMenu />
      </span>
      <nav
        className={`${styles.nav} ${visible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.exit}>
          <span
            onClick={() => {
              setVisible(!visible)
            }}
          >
            <IconExit />
          </span>
        </div>
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
          <SocialLinks inverted={true} />
        </div>
      </nav>
    </>
  )
}
