import React from "react"
import { Wrapper, Caption } from "./styles"
import { Scroll } from "../Scroll"
import India from "../../images/banner/india.png"
export function About() {
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
			<Scroll id="About" />
			<Wrapper className="Container">
				<div>
					<h2>
						Why does {/* <span className="underline"> */}
						1940<span className="violet">seven</span> {/* </span>{" "} */}
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
					<Caption
						id="first"
						className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
						ref={domRef}
					>
						Faster shipping
					</Caption>
					<Caption
						id="second"
						className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
						ref={domRef}
					>
						Lower Price{" "}
					</Caption>
					<Caption
						id="third"
						className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
						ref={domRef}
					>
						Made in India
					</Caption>
				</div>
			</Wrapper>
		</>
	)
}
