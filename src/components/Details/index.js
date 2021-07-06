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
				<h3>In India. In INR.</h3>
				<p>
					You won't have to take out your credit card for buying merch in $. Buy
					in ₹.
				</p>
			</div>
			<div
				className={`slide-in-section second-slide ${
					isVisible ? "is-visible" : ""
				}`}
				ref={domRef}
			>
				<Big>02</Big>
				<h3>Faster Delivery</h3>
				<p>
					No more international shipping. Your merch will be made in India and
					shipped from India.
				</p>
			</div>
			<div
				className={`slide-in-section third-slide ${
					isVisible ? "is-visible" : ""
				}`}
				ref={domRef}
			>
				<Big>03</Big>
				<h3>Orignal Merch</h3>
				<p>
					We work with your favorite creators to bring you orignal designs that
					you'll love.
				</p>
			</div>
		</Wrapper>
	)
}
