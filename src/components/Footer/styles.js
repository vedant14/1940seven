import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	background: linear-gradient(180deg, #062b68 0%, #914fff 100%);
	margin-top: 100px;
	> div:first-child {
		display: grid;
		grid-template-columns: 1fr;
		@media screen and (min-width: 768px) {
			grid-gap: 30px;
			grid-template-columns: 1fr 1fr;
		}
		> div {
			@media screen and (min-width: 768px) {
				margin-bottom: 60px;
				margin-top: 60px;
			}
			margin-bottom: 10px;
			margin-top: 30px;
			&#right-align {
				@media screen and (min-width: 768px) {
					margin-left: auto;
					margin-right: 0px;
				}
			}
			> p {
				margin-top: 12px;
				@media screen and (min-width: 768px) {
					width: 400px;
				}
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
						height: auto;
						margin: 5px 10px;
					}
				}
			}
			> div#links {
				display: grid;
				margin: 20px auto;
				grid-template-columns: 1fr;
				@media screen and (min-width: 768px) {
					display: flex;
					margin: 30px auto;
				}
				> a {
					border: none;
					margin-right: 25px;
					margin-bottom: 5px;
					@media screen and (min-width: 768px) {
						margin-bottom: 0px;
					}
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
