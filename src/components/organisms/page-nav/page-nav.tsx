import React from "react"
import { Link } from "gatsby"
import { IconArrowRight, IconArrowLeft } from "../../atoms/icons/icons"
import styles from "./page-nav.module.scss"

export function PageNav({ page, totalPages, slug }) {
  if (totalPages == 0) {
    return <span>{page + 1}</span>
  }

  return (
    <div className={styles.pageNav}>
      {(page != 0 && (
        <>
          <ArrowLeft page={page} slug={slug} />
          <NavButton page={1} slug={slug} />
        </>
      )) || <span className={styles.hidden} />}
      {page - 1 > 0 && "..."}
      <span>{page + 1}</span>
      {totalPages - page - 1 > 1 && "..."}
      {(page != totalPages && (
        <>
          <NavButton page={totalPages + 1} slug={slug} />
          <ArrowRight page={page} slug={slug} />
        </>
      )) || <span className={styles.hidden} />}
    </div>
  )
}

function ArrowRight({ page, slug }) {
  return (
    <NavButton page={page + 2} slug={slug}>
      <IconArrowRight />
    </NavButton>
  )
}
function ArrowLeft({ page, slug }) {
  return (
    <NavButton page={page} slug={slug}>
      <IconArrowLeft />
    </NavButton>
  )
}

function NavButton({
  page,
  slug,
  children,
}: {
  page: number
  slug: string
  children?: React.ReactNode
}) {
  return (
    <Link
      className={styles.navButton}
      to={page == 1 ? `/${slug}` : `/${slug}/${page - 1}`}
    >
      <span>{children || page}</span>
    </Link>
  )
}
