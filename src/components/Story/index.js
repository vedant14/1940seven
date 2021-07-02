import React from "react"
import { StoryWrapper, DisclaimerText } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
export function Story() {
	const text = useStaticQuery(graphql`
		query {
			airtable(data: { Name: { eq: "Story" } }) {
				data {
					Notes {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
	`)
	return (
		<React.Fragment>
			<StoryWrapper
				dangerouslySetInnerHTML={{
					__html: text.airtable.data.Notes.childMarkdownRemark.html,
				}}
			/>
			<DisclaimerText>
				<h4>
					This course does not have solutions. It’s a course to help you learn,
					and through a structured approach - helps you build a system.
				</h4>
			</DisclaimerText>
		</React.Fragment>
	)
}
