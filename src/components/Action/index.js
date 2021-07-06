import React from "react"
import { Wrapper, Button } from "./styles"

export function Action() {
	return (
		<Wrapper className="Container">
			<h2>
				Do you want 1940<span className="violet">seven</span> to add your
				favorite creator to our line up?
			</h2>
			<a href="https://ht7fx6eguht.typeform.com/to/IRKu9P6K" target="_blank">
				<Button>Click here to vote now!</Button>
			</a>
			<a href="https://ht7fx6eguht.typeform.com/to/IRKu9P6K" target="_blank">
				or signup as a creator
			</a>
		</Wrapper>
	)
}
