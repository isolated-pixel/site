import React from "react"
import { SlimLayout } from "../layouts/slim-layout/slim-layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { PostPage } from "../components/molecules/post-page/post-page"

const BlogPageTemplate = ({ pageContext, data, ...props }) => {
  return (
    <SlimLayout>
      <SEO
        title={data.contentfulBlogPost.title}
        keywords={data.contentfulBlogPost.tags}
      />
      <PostPage {...data.contentfulBlogPost} />
    </SlimLayout>
  )
}

export default BlogPageTemplate

export const query = graphql`
  query getBlogPost($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      title
      publishDate
      tags
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      author {
        name
      }
    }
  }
`
