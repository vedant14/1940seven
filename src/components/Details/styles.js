import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Wrapper = styled.div`
	margin: 200px 90px;
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	> div > p {
		margin-top: 16px;
	}
`

export const Big = styled.span`
	font-family: "Poppins", sans-serif;
	position: absolute;
	top: -110px;
	font-style: normal;
	font-weight: 300;
	font-size: 126px;
	color: rgba(207, 179, 255, 0.2);
`
