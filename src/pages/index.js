import React from "react"
import {
	Layout,
	Header,
	SEO,
	Hero,
	Merch,
	LineUp,
	Details,
	About,
	Action,
	Footer,
} from "../components"

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="1940Seven" description="By Vedant and Mandar" />
			<Header />
			<Hero />
			<Merch />
			<LineUp />
			<Action />
			<About />
			<Details />
			<Action />
			<Footer />
		</Layout>
	)
}

export default IndexPage
