import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/homepage/homepage"
import Image from "../components/image"
import SEO from "../components/seo"
import { PostBoard } from "../components/organisms/post-board/post-board"
import { InfoSection } from "../components/molecules/info-section/info-section"
import { AboutSection } from "../components/organisms/about-section/about-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutSection />
  </Layout>
)

export default IndexPage
