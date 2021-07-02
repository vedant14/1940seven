import React from "react"
import { DetailsWrapper, MobileWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { Scroll } from "../Scroll"

export function Details() {
	const text = useStaticQuery(graphql`
		query {
			airtable(data: { Name: { eq: "Details" } }) {
				data {
					Heading
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
		<MobileWrapper>
			<Scroll id="Details" />
			<DetailsWrapper>
				<div>
					<h1>{text.airtable.data.Heading}</h1>
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: text.airtable.data.Notes.childMarkdownRemark.html,
					}}
				/>
			</DetailsWrapper>
		</MobileWrapper>
	)
}
