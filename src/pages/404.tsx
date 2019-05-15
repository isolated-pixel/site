import React from "react"

import { SlimLayout } from "../layouts/slim-layout/slim-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <SlimLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </SlimLayout>
)

export default NotFoundPage
