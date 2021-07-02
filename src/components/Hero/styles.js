import styled from "styled-components"
import Banner from "../../images/banner/hero-desktop.png"

export const HeroWrapper = styled.div`
	background-image: url(${Banner});
	object-fit: cover;
	background-repeat: no-repeat;
`

export const HeaderText = styled.h1`
	text-align: right;
	margin: 0px 90px 0px auto;
	max-width: 300px;
	padding: 250px 0px 300px 0px;
	@media (min-width: 768px) {
		max-width: 400px;
	}
	@media (min-width: 1024px) {
		max-width: 450px;
	}
`
