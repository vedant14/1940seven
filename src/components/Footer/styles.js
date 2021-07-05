import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	background: linear-gradient(180deg, #062b68 0%, #914fff 100%);
	> div {
		margin: 0px 30px;
		display: grid;
		grid-template-columns: 1fr;
		@media screen and (min-width: 768px) {
			margin: 0px 90px;
			grid-template-columns: 1fr 1fr;
		}
		> div {
			> img#Logo {
				margin-top: 100px;
			}

			> div#social {
				display: flex;
				> p {
					margin: 0px;
				}

				margin: 15px 0px 80px 0px;
				> a {
					border: none;
					> img {
						height: 21px;
						margin: 5px 10px;
					}
				}
			}
		}
		> div#links {
			margin: auto;
			> a {
				border: none;
				margin-right: 25px;
			}
		}
	}
`
