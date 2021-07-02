import React from "react"
import {
	Layout,
	Header,
	SEO,
	Hero,
	Apply,
	Story,
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
			<SEO
				title="Personal Finance Course by Abhishek Agrawal"
				description="Personal Finance Course by Abhishek Agrawal"
			/>
			<Header />
			<Hero />
			<Apply />
			<Story />
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
