import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { InfoSection } from "../components/molecules/info-section/info-section"
import { BasicLayout } from "../layouts/basic-layout/basic-layout";

const AboutUsPage = ({ data }) => (
  <BasicLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <InfoSection {...data.contentfulInfoBlock} />
  </BasicLayout>
)

export const query = graphql`
  query getAboutUsPage {
    contentfulInfoBlock {
      id
      title
      body {
        json
      }
    }
  }
`

export default AboutUsPage
