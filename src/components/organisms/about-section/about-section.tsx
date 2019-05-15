import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from "../rich-text/rich-text"
import { InfoSection } from "../../molecules/info-section/info-section"
const GET_ABOUT_ISOPIX = graphql`
  query getAboutIsoPix {
    contentfulInfoBlock {
      id
      title
      body {
        json
      }
    }
  }
`
//
export function AboutSection() {
  const { contentfulInfoBlock } = useStaticQuery(GET_ABOUT_ISOPIX)
  return <InfoSection {...contentfulInfoBlock} />
}
