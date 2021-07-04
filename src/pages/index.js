import React from "react"
import {
	Layout,
	Header,
	SEO,
	Hero,
	Merch,
	LineUp,
	Details,
	ValueStrip,
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
			<ValueStrip />
			<Details />
			<About />
			<Action />
			<Footer />
		</Layout>
	)
}

export default IndexPage
