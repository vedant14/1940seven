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
						Why shop from 1940<span className="violet">seven</span>?
					</h2>
					<p>
						We like our creators just as much as you do. They make the world
						seem grander. But supporting them in India does not come cheap.
					</p>
					<p>
						<strong>
							International merchandise is sold in dollars and shipping
							internationally comes with its own headaches.
						</strong>
					</p>
					<p>
						We work with these creators to bring their designs to audiences in
						India. Now, supporters like us can easily shop from creators around
						the world.
					</p>
				</div>
				<div>
					<img src={India} />
					<Caption
						id="first"
						className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
						ref={domRef}
					>
						In India. In INR.
					</Caption>
					<Caption
						id="second"
						className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
						ref={domRef}
					>
						Faster Delivery
					</Caption>
					<Caption
						id="third"
						className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
						ref={domRef}
					>
						Orignal Merch
					</Caption>
				</div>
			</Wrapper>
		</>
	)
}
