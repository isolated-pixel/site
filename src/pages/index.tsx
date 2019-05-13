import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/homepage/homepage"
import Image from "../components/image"
import SEO from "../components/seo"
import { PostBoard } from "../components/organisms/post-board/post-board";

const IndexPage = () => (
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PostBoard/>
  </Layout>
)

export default IndexPage
