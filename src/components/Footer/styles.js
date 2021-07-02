import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	background: ${colors.washedGrey};
	margin-top: 50px;
	> div {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 5px;
		grid-template-areas:
			"social"
			"title"
			"disclaimer";
		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				"title social"
				"disclaimer disclaimer";
		}

		> div#social {
			grid-area: social;
			margin: auto;
			padding: 30px 0px;
			@media (min-width: 768px) {
				padding: 50px 0px;
			}
			> a > img {
				width: 30px;
				margin: 8px;
				@media (min-width: 768px) {
					width: 40px;
					margin: 10px;
				}
			}
			> a:first-child {
				> img {
					margin-left: 0px;
					width: 100px;
					@media (min-width: 768px) {
						width: 120px;
					}
				}
			}
			> a:last-child {
				> img {
					margin-right: 0px;
				}
			}
		}
		> div#disclaimer {
			border-top: 1px dotted ${colors.primaryBlack};
			padding-top: 15px;
			grid-area: disclaimer;
			> p {
				font-size: 0.9rem;
				font-style: italic;
			}
		}
		> div#title {
			margin: 10px auto;
			@media (min-width: 768px) {
				margin: auto 0px;
			}
			line-height: 14px;
			grid-area: title;
			> p {
				margin: 0px;
			}
		}
	}
`
