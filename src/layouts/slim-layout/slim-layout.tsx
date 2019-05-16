import React from "react"

import styles from "./slim-layout.module.scss"
import { BasicLayout } from "../basic-layout/basic-layout"

type props = {
  children: React.ReactNode
  beforeContent?: React.ReactNode
  afterContent?: React.ReactNode
}

export function SlimLayout({ children, beforeContent, afterContent }: props) {
  return (
    <BasicLayout
      beforeContent={beforeContent}
      className={styles.homepageWrapper}
      afterContent={afterContent}
    >
      {children}
    </BasicLayout>
  )
}
