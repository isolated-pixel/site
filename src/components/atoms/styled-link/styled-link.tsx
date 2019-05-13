import React from "react"
import { Link, GatsbyLinkProps } from "gatsby"
import styles from "./styled-link.module.scss"

export function StyledLink({
  to,
  children,
  ref,
  ...props
}: GatsbyLinkProps<any>) {
  return (
    <Link to={to} className={styles.headerLink} {...props}>
      {children}
    </Link>
  )
}
