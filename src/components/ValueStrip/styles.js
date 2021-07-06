import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const Wrapper = styled.div`
	text-align: center;
	margin-top: 100px;
	> h1 > u {
		text-decoration: line-through ${colors.violet};
	}
`
