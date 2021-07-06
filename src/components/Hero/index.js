import React from "react"
import { HeroWrapper, HeaderText } from "./styles"
export function Hero() {
	const [isVisible, setVisible] = React.useState(false)
	const domRef = React.useRef()
	React.useEffect(() => setVisible(true), [])
	console.log(isVisible)
	return (
		<HeroWrapper id="Home">
			<HeaderText
				className={`fade-in-slow-section ${isVisible ? "is-visible" : ""}`}
				ref={domRef}
			>
				Support your favorite creators
			</HeaderText>
		</HeroWrapper>
	)
}
