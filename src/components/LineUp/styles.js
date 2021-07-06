import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	> p {
		margin-top: 10px;
	}
`

export const CardList = styled.div`
	display: grid;
	margin-top: 30px;
	grid-template-columns: 1fr;
	grid-template-areas: "first" "card";
	@media screen and (min-width: 768px) {
		margin-top: 80px;
		grid-gap: 30px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: "first first card";
	}
	@media screen and (min-width: 1920px) {
		grid-gap: 90px;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-areas: "first first first card card";
	}
`

export const Card = styled.div`
	border: 2px solid ${colors.violet};
	position: relative;
	overflow: hidden;
	height: 380px;
	@media screen and (min-width: 768px) {
		height: 280px;
	}
	@media screen and (min-width: 1024px) {
		height: 380px;
	}
	@media screen and (min-width: 1920px) {
		height: 380px;
	}
	border-radius: 10px;
	text-align: center;
	cursor: pointer;
	background: linear-gradient(
		180deg,
		rgba(196, 196, 196, 0) 41.67%,
		#062b68 100%
	);
	> img {
		left: 0;
		object-fit: cover;
		position: absolute;
		z-index: -1;
		height: 100%;
		@media screen and (min-width: 1024px) {
			width: auto;
			height: auto;
		}
		max-width: 100%;
		filter: blur(10px);
	}
	> img#lock {
		height: auto;
		left: auto;
		z-index: 1;
		top: 30%;
		filter: none;
	}

	> small {
		position: inherit;
		top: 80%;
		transition-duration: 0.35s;
		transition-timing-function: ease;
	}
	&#first {
		grid-area: first;
	}
	&#second {
		grid-area: card;
		display: none;
		@media screen and (min-width: 768px) {
			display: block;
		}
	}

	&:hover {
		> small {
			border-bottom: 4px solid ${colors.violet};
			padding-bottom: 3px;
			top: 70%;
		}
	}
`
