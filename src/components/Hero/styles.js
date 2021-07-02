import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"

export const HeroWrapper = styled.div`
	color: ${colors.primaryBlack};
	background: ${colors.washedGrey};
`

export const HeaderContainer = styled(Container)`
	display: grid;
	margin: auto;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	grid-gap: 5px;
	@media (min-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.slick-arrow:before {
		display: none;
	}
	.slick-dots {
		width: fit-content;
		position: relative;
		margin: auto;
		bottom: 10px;
		@media (min-width: 768px) {
			bottom: 70px;
		}
	}
`

export const HeaderText = styled.h1`
	margin: 100px auto 50px auto;
	max-width: 300px;
	z-index: 5;
	@media (min-width: 768px) {
		margin: 150px 0px;
		max-width: 400px;
	}
	@media (min-width: 1024px) {
		margin: 150px 0px;
		max-width: 450px;
	}
`

export const HeaderImage = styled(Img)`
	max-width: 100%;
	height: 100%;
	width: 100%;
	display: flex !important;
	z-index: 5;
	margin: 0px auto 20px auto;
	border-radius: 20px;
	@media (min-width: 768px) {
		margin: 50px auto 100px auto;
		width: 80%;
	}
	@media (min-width: 1024px) {
		margin: 50px auto 100px auto;
		width: 80% !important;
	}
`

export const BlobImage = styled.img`
	position: absolute;
	display: none;
	@media (min-width: 768px) {
		display: block;
		left: -25%;
		top: -15%;
		width: 650px;
	}
	@media (min-width: 1024px) {
		left: -15%;
		top: -15%;
		width: 700px;
	}
`

export const MobileBlobImage = styled.img`
	position: absolute;
	display: block;
	top: 10%;
	right: 0%;
	@media (min-width: 768px) {
		display: none;
	}
`
