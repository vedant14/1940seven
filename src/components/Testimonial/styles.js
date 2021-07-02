import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const TestimonialWrapper = styled.div`
	padding: auto 150px;
`
export const TestimonialCard = styled.div`
	margin: 30px auto;
	display: grid !important;
	grid-template-columns: 1fr;
	> p {
		margin: 10px 0px;
	}
	> div {
		display: block;
		> a > h3 {
			margin: 5px auto;
			color: ${colors.primaryBlack};
			font-style: italic;
			text-decoration: underline;
		}
		> h4 {
			color: ${colors.washedBlack};
			margin: 0px;
		}
		@media screen and (min-width: 768px) {
			display: flex;
			> a > h3 {
				margin: 0px 10px 0px 0px;
			}
		}
	}
`
