import React from "react"
import styles from "./info-section.module.scss"
import { RichText } from "../../organisms/rich-text/rich-text"

export function InfoSection({ title, body }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{RichText({ richText: body.json })}</div>
    </div>
  )
}
