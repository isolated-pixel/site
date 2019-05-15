import React from "react"
import Img from "gatsby-image"
import styles from "./user-card.module.scss"
export function UserCard({
  name,
  title,
  shortBio,
  image,
  twitter,
  github,
  num = 0,
}) {
  return (
    <div className={`${styles.userCard} ${styles[`align${num % 2}`]}`}>
      <div>
        <Img fluid={image.fluid} className={styles.profileImg} />
        <h5>
          @{twitter}, gh: {github}
        </h5>
      </div>
      <div>
        <h1>
          {name} - {title}
        </h1>
        <p>{shortBio.shortBio}</p>
      </div>
    </div>
  )
}
