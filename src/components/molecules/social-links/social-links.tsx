import React from "react"
import { IconTwitter, IconFacebook, IconGithub } from "../../atoms/icons/icons"
import styles from "./social-links.module.scss"

const data = [
  {
    to: "https://twitter.com/_isolatedpixel",
    icon: <IconTwitter />,
    label: "Twitter",
  },
  {
    to: "https://www.facebook.com/IsolatedPixelGames/",
    icon: <IconFacebook />,
    label: "Facebook",
  },
  {
    to: "https://github.com/isolated-pixel/",
    icon: <IconGithub />,
    label: "Github",
  },
]

export function SocialLinks({ withLabels = false, inverted = false }) {
  return (
    <ul className={`${styles.social} ${styles[`inverted${inverted}`]}`}>
      {data.map(({ icon, label, to }) => (
        <li key={label}>
          <a href={to} title={label}>
            {icon}
            {withLabels && <span>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
