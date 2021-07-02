import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TwitterWrapper, TweetWrapper, TweetLoad } from "./styles"
import ContentLoader from "react-content-loader"
export function Twitter() {
	const text = useStaticQuery(graphql`
		{
			allAirtable(
				filter: { table: { eq: "Twitter" } }
				sort: { order: ASC, fields: data___TwitterNumber }
			) {
				edges {
					node {
						data {
							TweetLinks
							TwitterNumber
						}
					}
				}
			}
		}
	`)
	return (
		<TwitterWrapper>
			<h1>Wall of love</h1>
			<h2>
				Here are some of the glowing reviews this course has received on
				Twitter.
			</h2>
			<hr />
			<TweetWrapper>
				{text.allAirtable.edges.map(({ node }, i) => (
					<blockquote
						class="twitter-tweet"
						data-lang="en"
						data-dnt="true"
						data-cards="hidden"
						data-conversation="none"
						hide_media="true"
					>
						<a href={node.data.TweetLinks}>
							<TweetLoad>
								<ContentLoader
									speed={5}
									width={376}
									height={224}
									viewBox="0 0 476 224"
									backgroundColor="#f3f3f3"
									foregroundColor="#ecebeb"
								>
									<rect x="93" y="11" rx="3" ry="3" width="183" height="10" />
									<rect x="91" y="33" rx="3" ry="3" width="108" height="10" />
									<circle cx="35" cy="35" r="35" />
									<rect x="4" y="97" rx="0" ry="0" width="467" height="15" />
									<rect x="6" y="131" rx="0" ry="0" width="467" height="15" />
									<rect x="6" y="170" rx="0" ry="0" width="467" height="15" />
								</ContentLoader>
							</TweetLoad>
						</a>
					</blockquote>
				))}
			</TweetWrapper>
		</TwitterWrapper>
	)
}
