import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const Wrapper = styled.div`
	margin: 10px 90px;
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr;
	grid-gap: 30px;
	> div:first-child {
		width: 680px;
		> p {
			margin-top: 65px;
		}
	}
	> div:last-child {
		position: relative;
	}
`

export const Caption = styled.span`
	background: ${colors.violet};
	border-radius: 10px;
	padding: 5px 0px;
	text-align: center;
	width: 200px;
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: 18px;
	line-height: 20px;
	position: absolute;
	z-index: 10;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	left: auto;
	right: 90px;
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
