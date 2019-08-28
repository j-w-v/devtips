import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ThankYou extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Thanks" />
        <h1>Thanks!</h1>
        <p>For subscribbing. We will let you know when a new tip is posted!</p>
      </Layout>
    )
  }
}

export default ThankYou;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`