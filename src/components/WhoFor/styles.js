import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import { Container } from "react-bootstrap"

export const WhoForWrapper = styled(Container)`
	padding-bottom: 50px;
	border-bottom: 1px solid ${colors.washedGrey};
	> h1 {
		text-align: center;
		margin-bottom: 30px;
	}
	> h4 {
		background-color: ${colors.primary};
		text-align: center;
		margin: 30px 0px;
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
	> div > h2 {
		margin: 50px 0px 10px 0px;
	}
	> div > ul {
		padding-inline-start: 20px;
		@media (min-width: 768px) {
			padding-inline-start: 50px;
		}
		list-style-type: "-";
		> li {
			padding-inline-start: 5px;
			margin: 20px auto;
		}
	}
`
