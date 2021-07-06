import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Wrapper } from "./styles"
import { Scroll } from "../Scroll"
import MerchImage from "../../images/banner/merch.jpeg"
import Cart from "../../images/banner/cart.png"
export function Merch() {
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
			<Scroll id="Learn" />
			<Wrapper className="Container">
				<div id="first">
					<h2>In India. In INR. </h2>
					<p>
						Now you can buy licensed merchandise from your favorite creators,
						artists, influencers.
					</p>
					<p>
						1940<span className="violet-wo">seven</span> is working with the
						best creators around the world, creators who are known for
						challenging the status quo.
					</p>
					<p>
						And now, you can buy all their merchandise in India, in our local
						currency.
					</p>
					<AnchorLink href="#About">Keep reading</AnchorLink>
				</div>
				<div id="second">
					<img src={MerchImage} alt="Merch" id="Merch" />
					<img
						src={Cart}
						alt="Cart"
						id="Cart"
						className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
						ref={domRef}
					/>
				</div>
			</Wrapper>
		</>
	)
}
