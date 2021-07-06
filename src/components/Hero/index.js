import React from "react"
import { HeaderText, HeaderImage } from "./styles"
import BannerDesktop from "../../images/banner/hero-desktop.jpeg"
import BannerMobile from "../../images/banner/hero-mobile.jpeg"

export function Hero() {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	React.useEffect(() => setVisible(true), [])
	console.log(isVisible)
	return (
		<div id="Home">
			<HeaderImage src={BannerDesktop} alt="BannerDesktop" />
			<div className="Container">
				<HeaderText
					className={`fade-in-slow-section ${isVisible ? "is-visible" : ""}`}
					ref={domRef}
				>
					Support your favorite creators
				</HeaderText>
			</div>
		</div>
	)
}
