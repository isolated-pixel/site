import React from "react"
import styles from "./footer.module.scss"
import { SocialLinks } from "../social-links/social-links"
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <div>Isolated Pixel Games</div>
        </div>
        <div>
          <div>test</div>
        </div>
        <div>
          <SocialLinks withLabels={true} />
        </div>
      </div>
    </footer>
  )
}
