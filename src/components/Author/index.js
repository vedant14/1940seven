import React from "react"
import { AuthorWrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { Scroll } from "../Scroll"
export function Author() {
	const text = useStaticQuery(graphql`
		query {
			airtable(data: { Name: { eq: "Author" } }) {
				data {
					Heading
					Notes {
						childMarkdownRemark {
							html
						}
					}
					LandingImage {
						url
					}
				}
			}
		}
	`)
	return (
		<div>
			<Scroll id="AboutMe" />
			<AuthorWrapper>
				<h1>{text.airtable.data.Heading}</h1>
				<div>
					<div>
						<img
							src={text.airtable.data.LandingImage[0].url}
							alt={text.airtable.data.Heading}
						/>
					</div>
					<div
						dangerouslySetInnerHTML={{
							__html: text.airtable.data.Notes.childMarkdownRemark.html,
						}}
					/>
				</div>
			</AuthorWrapper>
		</div>
	)
}
