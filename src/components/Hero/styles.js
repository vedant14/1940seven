import styled from "styled-components"
import BannerDesktop from "../../images/banner/hero-desktop.png"
import BannerMobile from "../../images/banner/hero-mobile.png"

export const HeroWrapper = styled.div`
	object-fit: cover;
	background-repeat: no-repeat;
	background-image: url(${BannerMobile});
	@media (min-width: 768px) {
		background-size: 100%;
		background-image: url(${BannerDesktop});
	}
	background-position: bottom;
`

export const HeaderText = styled.h1`
	text-align: center;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	max-width: 300px;
	padding: 200px 0px 350px 0px;
	margin: auto;
	@media (min-width: 768px) {
		text-align: right;
		padding: 130px 0px 130px 0px;
		margin: 0px 90px 0px auto;
	}
	@media (min-width: 1024px) {
		max-width: 500px;
		padding: 150px 0px 150px 0px;
		margin: 0px 100px 0px auto;
	}
	@media (min-width: 1220px) {
		max-width: 500px;
		padding: 220px 0px 330px 0px;
		margin: 0px 100px 0px auto;
	}
	@media (min-width: 1920px) {
		padding: 550px 0px 600px 0px;
		margin: 0px 500px 0px auto;
	}
`
