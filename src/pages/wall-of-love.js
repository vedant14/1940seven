import React from "react"
import { Layout, SEO, Header, Twitter, Footer } from "../components"

const WallOfLove = () => {
	return (
		<Layout>
			<SEO
				title="Wall of Love for our course"
				description="Personal Finance Course by Abhishek Agrawal"
			/>
			<Header page="wall" />
			<Twitter />
			<Footer />
		</Layout>
	)
}

export default WallOfLove
