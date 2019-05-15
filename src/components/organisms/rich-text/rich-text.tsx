import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

type props = {
  richText?: any
  children?: any
}

export function RichText({ richText, children }: props) {
  return documentToReactComponents(children || richText)
}
