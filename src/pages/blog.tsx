import React from "react"

import Layout from "../layouts/homepage/homepage"
import SEO from "../components/seo"
import { PostBoard } from "../components/organisms/post-board/post-board"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PostBoard />
  </Layout>
)

export default IndexPage
