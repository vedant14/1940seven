import React from "react"
import { Wrapper, CardList, Card } from "./styles"
import FirstCreator from "../../images/creators/first.jpeg"
import { Scroll } from "../Scroll"
import SecondCreator from "../../images/creators/second.jpeg"
import Lock from "../../images/icons/lock.png"
export function LineUp() {
	const [isVisible, setVisible] = React.useState(true)
	const domRef = React.useRef()
	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => setVisible(entry.isIntersecting))
		})
		observer.observe(domRef.current)
		return () => observer.unobserve(domRef.current)
	}, [])
	return (
		<>
			<Scroll id="Creators" />
			<Wrapper className="Container">
				<h2>Creator Line Up</h2>
				<p>
					1940<span className="violet-wo">seven</span> will soon be launching
					licensed merchandise from your favorite creators.
				</p>
				<p className="zero-mg">
					Stay connected to hear about the reveal.{" "}
					<a href="www.google.com">Notify me!</a>
				</p>
				<CardList
					className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
					ref={domRef}
				>
					<Card id="first">
						<img alt="caption" src={FirstCreator} />
						<img alt="caption" src={Lock} id="lock" />
						<small>Revealing Soon</small>
					</Card>
					<Card id="second">
						<img alt="caption" src={SecondCreator} />
						<img alt="caption" src={Lock} id="lock" />
						<small>Revealing Soon</small>
					</Card>
				</CardList>
			</Wrapper>
		</>
	)
}
