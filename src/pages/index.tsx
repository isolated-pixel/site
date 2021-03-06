import React from "react"

import { SlimLayout } from "../layouts/slim-layout/slim-layout"
import SEO from "../components/seo"
import { Hero } from "../components/molecules/hero/hero"

const IndexPage = () => (
  <SlimLayout beforeContent={<Hero />}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Welcome to Isolated Pixel</p>
  </SlimLayout>
)

export default IndexPage
