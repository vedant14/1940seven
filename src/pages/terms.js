import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Footer } from "../components"

const TermsPage = ({ data }) => {
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { type: { eq: "terms" } }) {
      html
    }
  }
`

export default TermsPage
