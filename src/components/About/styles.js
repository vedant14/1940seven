import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const Wrapper = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: 1fr;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1.5fr 1fr;
	}
	@media screen and (min-width: 1920px) {
		grid-template-columns: 1fr 1fr;
	}
	grid-gap: 30px;
	> div:first-child {
		max-width: 100%;
		> p {
			margin-top: 65px;
		}
	}
	> div:last-child {
		position: relative;
		> img {
			max-width: 100%;
			float: right;
			@media screen and (min-width: 768px) {
				width: 600px;
			}
		}
	}
`

export const Caption = styled.span`
	cursor: default;
	background: ${colors.violet};
	border-radius: 10px;
	padding: 5px 0px;
	text-align: center;
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: 16px;
	@media screen and (min-width: 768px) {
		font-size: 18px;
		width: 150px;
		right: 20px;
	}
	@media screen and (min-width: 1024px) {
		font-size: 18px;
		width: 200px;
		right: 90px;
	}
	width: 140px;
	right: 40px;
	position: absolute;
	z-index: 10;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	left: auto;

	&#second {
		top: 30%;
	}

	&#first {
		top: 10%;
	}

	&#third {
		top: 50%;
	}
`
