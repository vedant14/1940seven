import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Footer } from "../components"

const TermsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="1940Seven" description="By Vedant and Mandar" />
      <div className="Container">
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </div>
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
