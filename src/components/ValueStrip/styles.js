import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const Wrapper = styled.div`
	margin: 100px 30px;
	@media screen and (min-width: 768px) {
		margin: 250px 90px;
	}
	text-align: center;
	> h1 > u {
		text-decoration: line-through ${colors.violet};
	}
`
