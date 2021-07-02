import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import FaqItem from "./FaqItem"
import { Scroll } from "../Scroll"

export function FAQ() {
	const FAQtext = useStaticQuery(graphql`
		query MyQuery {
			allAirtable(
				filter: { table: { eq: "FAQ" } }
				sort: { fields: data___QuestionNumber, order: ASC }
			) {
				edges {
					node {
						data {
							Answers {
								childMarkdownRemark {
									html
								}
							}
							Question
						}
					}
				}
			}
		}
	`)
	return (
		<div>
			<Scroll id="FAQ" />
			<Container>
				<h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
				<div>
					{FAQtext.allAirtable.edges.map(({ node }, i) => (
						<FaqItem title={node.data.Question} key={i}>
							<div
								dangerouslySetInnerHTML={{
									__html: node.data.Answers.childMarkdownRemark.html,
								}}
							/>
						</FaqItem>
					))}
				</div>
			</Container>
		</div>
	)
}
