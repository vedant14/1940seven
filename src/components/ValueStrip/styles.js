import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const Wrapper = styled.div`
	text-align: center;
	> h1 > u {
		text-decoration: line-through ${colors.violet};
	}
`
