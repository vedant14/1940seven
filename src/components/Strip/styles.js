import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const StripWrapper = styled.a`
	> h2 {
		background-color: ${colors.primary};
		font-family: "Poppins", sans-serif;
		text-align: center;
		margin: 30px 0px;
		padding: 30px;
		color: ${colors.white};
		@media (min-width: 768px) {
			padding: 40px;
		}
		@media (min-width: 1024px) {
			padding: 50px 100px;
			line-height: 25px;
		}
		&:hover {
			background: ${colors.secondary};
		}
	}
`
