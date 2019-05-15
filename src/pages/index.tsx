import React from "react"

import Layout from "../layouts/homepage/homepage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      Welcome to Isolated Pixel
    </p>
  </Layout>
)

export default IndexPage
