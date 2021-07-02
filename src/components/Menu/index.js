import React from "react"
import { Link } from "gatsby"
import { Nav } from "./styles"
import Scrollspy from "react-scrollspy"
import AnchorLink from "react-anchor-link-smooth-scroll"

export function Menu({ items }) {
	return (
		<Nav>
			<Scrollspy
				items={items.map(item => item.link)}
				currentClassName="is-current"
				offset={-64}
			>
				{items.map(item => (
					<li key={item.id}>
						<AnchorLink href={`#${item.link}`}>{item.name}</AnchorLink>
					</li>
				))}
			</Scrollspy>
		</Nav>
	)
}
