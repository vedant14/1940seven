import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	margin: 100px 30px;
	@media screen and (min-width: 768px) {
		margin: 200px 90px;
	}
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	> div > p {
		margin-top: 16px;
	}
`

export const Big = styled.span`
	font-family: "Poppins", sans-serif;
	position: absolute;
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
	}
	top: -110px;
	font-style: normal;
	font-weight: 300;
	font-size: 126px;
	color: rgba(207, 179, 255, 0.2);
`
