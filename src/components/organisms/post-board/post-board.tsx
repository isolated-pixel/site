import React from "react"
import styles from "./post-board.module.scss"
import { Post } from "../../molecules/post/post"
import { graphql, useStaticQuery } from "gatsby"
const GET_POST_BOARD_DATA = graphql`
  query getPostBoard {
    allContentfulBlogPost(limit: 3) {
      totalCount
      nodes {
        id
        title
        slug
        tags
        publishDate
        author {
          name
        }
        description {
          description
        }
      }
    }
  }
`

export function PostBoard() {
  const {allContentfulBlogPost}= useStaticQuery(GET_POST_BOARD_DATA)
  console.log(allContentfulBlogPost)
  return (
    <div className={styles.postBoard}>
      { allContentfulBlogPost &&
        allContentfulBlogPost.nodes &&
        allContentfulBlogPost.nodes.map(node => {
          return <Post {...node} key={node.id} />
        })}
    </div>
  )
}
