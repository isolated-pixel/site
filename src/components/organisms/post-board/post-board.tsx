import React from "react"
import styles from "./post-board.module.scss"
import { Post } from "../../molecules/post/post"
import { graphql, useStaticQuery } from "gatsby"


export function PostBoard(allContentfulBlogPost) {
  return (
    <div className={styles.postBoard}>
      {allContentfulBlogPost &&
        allContentfulBlogPost.nodes &&
        allContentfulBlogPost.nodes.map(node => {
          return <Post {...node} key={node.id} />
        })}
    </div>
  )
}
