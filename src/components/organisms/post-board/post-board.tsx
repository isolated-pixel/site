import React from "react"
import styles from "./post-board.module.scss"
import { Post } from "../../molecules/post/post"

export function PostBoard() {
  return (
    <div className={styles.postBoard}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
