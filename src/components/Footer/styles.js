import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	background: linear-gradient(180deg, #062b68 0%, #914fff 100%);
	> div:first-child {
		display: grid;
		grid-template-columns: 1fr;
		@media screen and (min-width: 768px) {
			grid-gap: 30px;
			grid-template-columns: 1fr 1fr;
		}
		> div {
			margin-bottom: 60px;
			margin-top: 60px;

			> p {
				margin-top: 12px;
				width: 400px;
				line-height: 20px;
			}
			> div#social {
				display: flex;
				> p {
					margin: 0px 20px 0px 0px;
				}
				> a {
					border: none;
					> img {
						height: 21px;
						margin: 5px 10px;
					}
				}
			}
			> div#links {
				margin: 30px auto;
				> a {
					border: none;
					margin-right: 25px;
				}
			}
		}
	}
`

export const LastStrip = styled.div`
	background: #062b68;
	text-align: center;
	> p {
		margin: 0px;
		padding-top: 15px;
		padding-bottom: 15px;
	}
`
