import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	margin: 200px 90px;
	> p {
		margin-top: 10px;
	}
`

export const CardList = styled.div`
	display: grid;
	margin-top: 80px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 30px;
	grid-template-areas: "first first card";
`

export const Card = styled.div`
	border: 2px solid ${colors.violet};
	position: relative;
	overflow: clip;
	height: 380px;
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
		position: absolute;
		z-index: -1;
		max-width: 100%;
		filter: blur(10px);
	}
	> img#lock {
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
	&:first-child {
		grid-area: first;
	}
	grid-area: card;

	&:hover {
		> small {
			border-bottom: 4px solid ${colors.violet};
			padding-bottom: 3px;
			top: 70%;
		}
	}
`
