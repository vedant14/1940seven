import React from "react"
import { Wrapper, Big } from "./styles"

export function Details() {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => setVisible(entry.isIntersecting))
		})
		observer.observe(domRef.current)
		return () => observer.unobserve(domRef.current)
	}, [])

	console.log(isVisible)
	return (
		<Wrapper className="Container">
			<div
				className={`slide-in-section first-slide ${
					isVisible ? "is-visible" : ""
				}`}
				ref={domRef}
			>
				<Big>01</Big>
				<h3>
					Creators list <br /> your merchandise
				</h3>
				<p>Made in India:)</p>
			</div>
			<div
				className={`slide-in-section second-slide ${
					isVisible ? "is-visible" : ""
				}`}
				ref={domRef}
			>
				<Big>02</Big>
				<h3>
					Supporters buy <br />
					the merchandise
				</h3>
				<p>We take care of the logistics</p>
			</div>
			<div
				className={`slide-in-section third-slide ${
					isVisible ? "is-visible" : ""
				}`}
				ref={domRef}
			>
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
