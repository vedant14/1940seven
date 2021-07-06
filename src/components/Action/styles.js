import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const Wrapper = styled.div`
	text-align: center;
	margin-top: 200px;
	margin-bottom: 50px;
	> h2 {
		margin: auto;
		width: 1000px;
		max-width: 100%;
	}
`

export const Button = styled.div`
	text-decoration: none;
	background: ${colors.violet};
	padding: 20px;
	text-align: center;
	cursor: pointer;
	@media screen and (min-width: 768px) {
		width: 300px;
	}
	margin: 40px auto;
	border-radius: 10px;
	transition-duration: 0.35s;
	transition-timing-function: ease;
	:hover {
		transform: translateY(-2px); /* Standard syntax */
	}
`
