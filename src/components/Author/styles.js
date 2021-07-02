import styled from "styled-components"
import { Container } from "react-bootstrap"

export const AuthorWrapper = styled(Container)`
	> div {
		margin: 40px 0px;
		display: grid;
		grid-template-columns: 1fr;
		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
		> div:first-child {
			> img {
				position: relative;
				width: 100%;
				height: 350px;
				object-fit: cover;
				object-position: top;
				@media (min-width: 768px) {
					padding: 20px;
					width: 80%;
					height: 500px;
				}
			}
		}
		> div:last-child {
			margin: 30px 0px;
			> h1,
			p {
				margin: 0px 0px 20px 0px;
				line-height: 16px;
			}
			@media (min-width: 768px) {
				margin: 0px 30px;
				> h1,
				p {
					margin: 0px 0px 45px 0px;
					line-height: 30px;
				}
				> h1 {
					font-size: 30px;
				}
			}
			@media (min-width: 1024px) {
				> h1 {
					font-size: 40px;
				}
			}
		}
	}
`
