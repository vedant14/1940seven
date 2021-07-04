import React from "react"
import { Wrapper, CardList, Card } from "./styles"
import FirstCreator from "../../images/creators/first.png"
import SecondCreator from "../../images/creators/second.png"
import Lock from "../../images/icons/lock.png"
export function LineUp() {
	return (
		<Wrapper>
			<h2>Creator Line Up</h2>
			<p>
				We are collaborating with some of the best creators around the world.
			</p>
			<CardList>
				<Card>
					<img alt="caption" src={FirstCreator} />
					<img alt="caption" src={Lock} id="lock" />
					<small>Revealing Soon</small>
				</Card>
				<Card>
					<img alt="caption" src={SecondCreator} />
					<img alt="caption" src={Lock} id="lock" />
					<small>Revealing Soon</small>
				</Card>
			</CardList>
		</Wrapper>
	)
}
