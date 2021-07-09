import React from "react"
import { Wrapper, HeaderText } from "./styles"
import BannerDesktop from "../../images/banner/hero-desktop.jpeg"

export function Hero() {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	React.useEffect(() => setVisible(true), [])
	console.log(isVisible)
	return (
		<Wrapper id="Home">
			<div className="Container">
				<HeaderText
					className={`fade-in-slow-section ${isVisible ? "is-visible" : ""}`}
					ref={domRef}
				>
					<h1>Licensed Merch from your favorite creators!</h1>
				</HeaderText>
			</div>
		</Wrapper>
	)
}
