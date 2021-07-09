import styled from "styled-components"
import BannerDesktop from "../../images/banner/hero-desktop.jpeg"
export const Wrapper = styled.div`
	background-image: url(${BannerDesktop});
	height: 80vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 30%;
	@media (min-width: 768px) {
		height: 45vh;
		background-position: bottom;
	}
	@media (min-width: 1340px) {
		height: 90vh;
		background-position: bottom;
	}
	@media (min-width: 1920px) {
		height: 90vh;
		background-position: bottom;
	}
	> div {
		display: flex;
	}
`

export const HeaderText = styled.div`
	text-align: center;
	position: relative;
	text-shadow: 2px 8px 10px rgba(0, 0, 0, 0.8);
	max-width: 300px;
	margin: 50% auto;
	@media (min-width: 768px) {
		text-align: right;
		margin: 20% 0px auto auto;
	}
	@media (min-width: 1024px) {
		max-width: 400px;
	}
	@media (min-width: 1220px) {
		max-width: calc(650px + 1.4vw);
	}
`
