import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	> div {
		position: relative;
		margin-top: 30px;
		@media screen and (min-width: 768px) {
			margin-top: 50px;
		}
	}
	> div > p {
		margin-top: -19px;
	}
`

export const Big = styled.span`
	font-family: "Poppins", sans-serif;
	/*position: inherit;*/
	position: absolute;
	cursor: default;
	user-select: none;
	--webkit-user-select: none;
	top: -15px;
	@media screen and (min-width: 768px) {
		font-size: 96px;
		top: -30px;
	}

	@media screen and (min-width: 1024px) {
		font-size: 126px;
		top: -50px;
	}

	font-style: normal;
	font-weight: 300;
	font-size: 46px;
	color: rgba(207, 179, 255, 0.3);
`
