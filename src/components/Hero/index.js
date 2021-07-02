import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Blob from "../../images/blob.svg"
import MobileBlob from "../../images/mobileBlob.svg"
import Slider from "react-slick"

import {
	HeroWrapper,
	HeaderImage,
	HeaderText,
	HeaderContainer,
	BlobImage,
	MobileBlobImage,
} from "./styles"
export function Hero() {
	const settings = {
		dots: true,
		className: "center",
		infinite: true,
		slidesToShow: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 5000,
	}
	const data = useStaticQuery(graphql`
		{
			airtable(data: { Name: { eq: "Banner" } }) {
				data {
					Heading
					Highlight
				}
			}
			allFile(filter: { relativeDirectory: { eq: "banner" } }) {
				edges {
					node {
						childImageSharp {
							fluid(maxWidth: 600) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)
	return (
		<HeroWrapper id="Home">
			<HeaderContainer>
				<HeaderText>
					<h1>{data.airtable.data.Heading}</h1>
					<h3>{data.airtable.data.Highlight}</h3>
				</HeaderText>
				<BlobImage src={Blob} alt="Blob" />
				<MobileBlobImage src={MobileBlob} alt="Blob" />

				<Slider {...settings}>
					{data.allFile.edges.map(({ node }, i) => (
						<HeaderImage fluid={node.childImageSharp.fluid} />
					))}
				</Slider>
			</HeaderContainer>
		</HeroWrapper>
	)
}
