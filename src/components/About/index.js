import React from "react"
import { Wrapper, Caption } from "./styles"
import { Scroll } from "../Scroll"
import India from "../../images/banner/india.png"
export function About() {
	return (
		<>
			<Scroll id="About" />
			<Wrapper>
				<div>
					<h2>
						Why does{" "}
						<span className="underline">
							1940<span className="violet">seven</span>{" "}
						</span>{" "}
						exist?
					</h2>
					<p>
						We like our creators just as much as you do. They make the world
						seem grander. But representing them in India does not come cheap.
						<br />
						<strong>
							International merchandise is sold in dollars. <br />
							And shipping to India is even more expensive
						</strong>
					</p>
				</div>
				<div>
					<img src={India} />
					<Caption id="first">Faster shipping</Caption>
					<Caption id="second">Lower Price </Caption>
					<Caption id="third">Made in India</Caption>
				</div>
			</Wrapper>
		</>
	)
}
