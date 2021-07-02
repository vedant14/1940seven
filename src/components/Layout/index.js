import React from "react"
import { LayoutWrapper } from "./styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
export function Layout({ children }) {
	return (
		<div>
			<GlobalStyles />
			<LayoutWrapper>
				<Helmet>
					<script src={withPrefix("script.js")} type="text/javascript" />
				</Helmet>
				<main>{children}</main>
			</LayoutWrapper>
		</div>
	)
}
