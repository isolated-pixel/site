import React from "react"

import Layout from "../layouts/homepage/homepage"
import SEO from "../components/seo"
import { Hero } from "../components/molecules/hero/hero"

const IndexPage = () => (
  <Layout beforeContent={<Hero />}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Welcome to Isolated Pixel</p>
  </Layout>
)

export default IndexPage
