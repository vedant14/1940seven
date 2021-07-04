import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const Wrapper = styled.div`
	margin: 150px 90px 200px 90px;
	text-align: center;
	> h2 {
		margin: auto;
		width: 1000px;
	}
`

export const Button = styled.div`
	text-decoration: none;
	background: ${colors.violet};
	padding: 20px;
	text-align: center;
	cursor: pointer;
	width: 300px;
	margin: 40px auto;
	border-radius: 10px;
	transition-duration: 0.35s;
	transition-timing-function: ease;
	:hover {
		transform: translateY(-2px); /* Standard syntax */
	}
`
