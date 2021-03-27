import * as React from "react"

import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section style={{flexGrow: 1}}>
      <div>
        <h1>404: NOT FOUND</h1>
        <p>You just found a path we couldn't find a page for... :(<br/>Perhaps you should try going <Link to={"/"}>home</Link>.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
