import React from "react"
import { SlimLayout } from "../layouts/slim-layout/slim-layout"
import SEO from "../components/seo"
import { PostBoard } from "../components/organisms/post-board/post-board"
import { graphql } from "gatsby"
import { PageNav } from "../components/organisms/page-nav/page-nav"

const BlogPageTemplate = ({ pageContext, data, ...props }) => {
  return (
    <SlimLayout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PostBoard {...data.allContentfulBlogPost} />
      <PageNav
        slug={pageContext.slug}
        page={pageContext.page}
        totalPages={pageContext.totalPages}
      />
    </SlimLayout>
  )
}

export default BlogPageTemplate

export const query = graphql`
  query getBlogPages($limit: Int, $skip: Int) {
    allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { fields: publishDate, order: DESC }
    ) {
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
