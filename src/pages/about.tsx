import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { InfoSection } from "../components/molecules/info-section/info-section"
import { BasicLayout } from "../layouts/basic-layout/basic-layout"
import { UserCard } from "../components/molecules/user-card/user-card"

const AboutUsPage = ({ data }) => (
  <BasicLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <InfoSection {...data.contentfulInfoBlock} />
    {data.allContentfulPerson.nodes.map((node, i) => (
      <UserCard {...node} num={i} key={node.id} />
    ))}
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
    allContentfulPerson {
      nodes {
        id
        name
        title
        shortBio {
          shortBio
        }
        image {
          fluid(maxWidth: 150) {
            ...GatsbyContentfulFluid_tracedSVG
          }
          file {
            url
          }
        }
        twitter
        github
      }
    }
  }
`

export default AboutUsPage
