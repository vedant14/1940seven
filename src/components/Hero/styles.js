import styled from "styled-components"
import Banner from "../../images/banner/hero-desktop.png"

export const HeroWrapper = styled.div`
	background-image: url(${Banner});
	object-fit: cover;
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
`

export const HeaderText = styled.h1`
	text-align: right;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	margin: 0px 90px 0px auto;
	max-width: 300px;
	padding: 250px 0px 300px 0px;
	@media (min-width: 768px) {
		max-width: 400px;
		margin: 0px 90px 0px auto;
	}
	@media (min-width: 1024px) {
		max-width: 450px;
		margin: 0px 400px 0px auto;
	}
`
