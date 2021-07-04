import React from "react"
import { Wrapper, Big } from "./styles"

export function Details() {
	return (
		<Wrapper>
			<div>
				<Big>01</Big>
				<h3>
					Creators list <br /> your merchandise
				</h3>
				<p>Made in India:)</p>
			</div>
			<div>
				<Big>02</Big>
				<h3>
					Supporters buy <br />
					the merchandise
				</h3>
				<p>We take care of the logistics</p>
			</div>
			<div>
				<Big>03</Big>
				<h3>
					Creators get <br />
					their share
				</h3>
				<p>Instantly! As soon as the return period is over.</p>
			</div>
		</Wrapper>
	)
}
