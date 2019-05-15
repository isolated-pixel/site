import React from "react"

import { SlimLayout } from "../layouts/slim-layout/slim-layout"
import SEO from "../components/seo"
import { Hero } from "../components/molecules/hero/hero"

const IndexPage = () => (
  <SlimLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p style={{ alignSelf: "center" }}>Store is coming soon!</p>
  </SlimLayout>
)

export default IndexPage
