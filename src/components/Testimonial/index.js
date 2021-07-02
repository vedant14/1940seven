import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import { Scroll } from "../Scroll"
import { TestimonialWrapper, TestimonialCard } from "./styles"
import { Container } from "react-bootstrap"
export function Testimonial() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
	}
	const text = useStaticQuery(graphql`
		query {
			allAirtable(
				filter: { table: { eq: "Testimonial" } }
				sort: { fields: data___TestimonialNumber, order: ASC }
			) {
				edges {
					node {
						id
						data {
							TestimonialName
							TestimonialText
							TestimonialLink
							TestimonialAbout
						}
					}
				}
			}
		}
	`)
	return (
		<TestimonialWrapper>
			<Scroll id="Testimonial" />
			<Container>
				<h1>Testimonials</h1>
				<Slider {...settings} id="Testimonial">
					{text.allAirtable.edges.map(({ node }, i) => (
						<TestimonialCard key={i}>
							<p>{node.data.TestimonialText}</p>
							<div>
								<a
									href={node.data.TestimonialLink}
									target="_blank"
									rel="noreferrer"
								>
									<h3>{node.data.TestimonialName}</h3>
								</a>
								<h4>[{node.data.TestimonialAbout}]</h4>
							</div>
						</TestimonialCard>
					))}
				</Slider>
			</Container>
		</TestimonialWrapper>
	)
}
