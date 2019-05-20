import React from "react"
import styles from "./post.module.scss"
import { Link } from "gatsby"
export function Post({ title, description, author, tags, publishDate, slug }) {
  return (
    <Link to={slug}>
      <div className={styles.post}>
        <h1>{title}</h1>
        <p>{description.description}</p>
        <h5>
          By {author.name} | {new Date(publishDate).toDateString()}
        </h5>
        <span>{tags.map(tag => `#${tag}`).join(" ")}</span>
      </div>
    </Link>
  )
}
