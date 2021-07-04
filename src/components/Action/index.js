import React from "react"
import { Wrapper, Button } from "./styles"

export function Action() {
	return (
		<Wrapper>
			<h2>
				Do you want 1940<span className="violet">seven</span> to add your
				favorite creator to our line up?
			</h2>
			<a
				href="https://www.w3schools.com/css/css3_transitions.asp"
				target="_blank"
			>
				<Button>Click here to vote!</Button>
			</a>
		</Wrapper>
	)
}
