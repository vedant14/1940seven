import React from "react"
import {
	Layout,
	Header,
	SEO,
	Hero,
	Apply,
	Merch,
	Details,
	WhoFor,
	Strip,
	Author,
	Testimonial,
	FAQ,
	Footer,
} from "../components"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="1940Seven" description="By Vedant and Mandar" />
			<Header />
			<Hero />
			<Merch />
			<Details />
			<WhoFor />
			<Author />
			<Strip />
			<Testimonial />
			<FAQ />
			<Footer />
		</Layout>
	)
}

export default IndexPage
