import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	grid-gap: 10px;
	@media screen and (min-width: 768px) {
		margin: 200px 90px;
		grid-template-columns: 1fr 1fr 1fr;
	}
	margin: 100px 30px;
	> div > p {
		margin-top: -19px;
	}
`

export const Big = styled.span`
	font-family: "Poppins", sans-serif;
	position: absolute;
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
	}
	top: -50px;
	font-style: normal;
	font-weight: 300;
	font-size: 126px;
	color: rgba(207, 179, 255, 0.2);
`
