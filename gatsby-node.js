/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-page.tsx`)
  return graphql(
    `
      query getPostBoard {
        allContentfulBlogPost {
          totalCount
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const LIMIT = 1
    const SLUG = `blog`

    let totalPages = Math.round(
      result.data.allContentfulBlogPost.totalCount / LIMIT
    )
    for (let i = 0; i < totalPages; i++) {
      createPage({
        path: `${SLUG}${i > 0 ? `/${i}` : ""}`,
        component: blogPostTemplate,
        context: {
          page: i,
          limit: LIMIT,
          skip: i * LIMIT,
          totalPages,
          slug: SLUG,
        },
      })
    }
  })
}
