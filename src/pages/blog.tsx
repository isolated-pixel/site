import React from "react"

import { SlimLayout } from "../layouts/slim-layout/slim-layout"
import SEO from "../components/seo"
import { PostBoard } from "../components/organisms/post-board/post-board"

const IndexPage = () => (
  <SlimLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PostBoard />
  </SlimLayout>
)

export default IndexPage
