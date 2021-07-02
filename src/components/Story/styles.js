import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const StoryWrapper = styled(Container)`
	margin: 20px auto;
	> ul {
		padding-inline-start: 0px;
		list-style-type: none !important;
		> li {
			border-left: 5px solid #635c60;
			margin: 50px auto;
			padding-inline-start: 30px;
			color: ${colors.primary};
			> ul {
				padding-inline-start: 0px;
				list-style-type: none !important;
				> li {
					color: ${colors.washedBlack};
					margin: 8px 0px;
				}
			}
		}
	}
`

export const DisclaimerText = styled(Container)`
	background: ${colors.primary};
	margin-top: 100px;
	> h4 {
		text-align: center;
		padding: 30px;
		color: ${colors.washedGrey};
		@media (min-width: 768px) {
			padding: 40px;
		}
		@media (min-width: 1024px) {
			padding: 50px 100px;
			line-height: 25px;
		}
	}
`
