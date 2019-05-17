// @flow
import * as React from "react"
import { RichText } from "../../organisms/rich-text/rich-text"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
type props = {
  author: { name: string }
  body: { childMarkdownRemark: any }
  tags: [string]
  publishDate: string
  title: string
  id: string
}
export function PostPage({
  author,
  body,
  id,
  publishDate,
  tags,
  title,
}: props) {
  console.log(body)
  return (
    <article>
      <h1>{title}</h1>
      <h2>
        {author.name}, Published on {new Date(publishDate).toDateString()} |{" "}
        {tags.map(tag => `#${tag}`).join(" ")}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}>
      </div>
    </article>
  )
}
