import React from "react"
import { Wrapper } from "./styles"

export function ValueStrip() {
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
		<Wrapper className="Container">
			<h1>
				Creators have 100% ownership of their supporters. <br />
				<span
					className={`fade-in-slow-section ${isVisible ? "is-visible" : ""}`}
					ref={domRef}
				>
					We <u>don’t spam</u>, we <u>don’t sell</u>.
				</span>
			</h1>
		</Wrapper>
	)
}
