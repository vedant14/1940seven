import React from "react"
import { WhoForWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { Scroll } from "../Scroll"
export function WhoFor() {
	const text = useStaticQuery(graphql`
		query {
			airtable(data: { Name: { eq: "WhoFor" } }) {
				data {
					Heading
					Highlight
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
		<div>
			<Scroll id="WhoIsThisFor" />
			<WhoForWrapper>
				<h1>{text.airtable.data.Heading}</h1>
				<h4>{text.airtable.data.Highlight}</h4>
				<div
					dangerouslySetInnerHTML={{
						__html: text.airtable.data.Notes.childMarkdownRemark.html,
					}}
				/>
			</WhoForWrapper>
		</div>
	)
}
