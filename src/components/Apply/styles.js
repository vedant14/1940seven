import styled from "styled-components"
import { Container } from "react-bootstrap"
import { colors } from "../../styles/GlobalStyles"

export const BorderWrapper = styled.div`
	border-top: 1px solid ${colors.primaryBlack};
	border-bottom: 1px solid ${colors.primaryBlack};
	z-index: 5;
`

export const ApplyWrapper = styled(Container)`
	margin: 10px auto;
	padding: 22px auto;
	background: ${colors.white};
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"fir fir"
		"sec third"
		"button button";
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			"fir sec third"
			"button button button";
	}
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-areas: "fir sec third button";
	}
	> div > span {
		color: ${colors.primary};
	}
	> div {
		margin: 10px 0px;
		@media (min-width: 1024px) {
			margin: auto;
		}
	}
	> div#first {
		grid-area: fir;
		display: flex;
		> span {
			margin: auto 30px auto 0px;
			font-size: 1.2rem;
			font-weight: 500;
		}
		> h4 {
			margin: 0px;
		}
	}
	> div#second {
		grid-area: sec;
	}
	> div#third {
		grid-area: third;
	}
	> div#button {
		grid-area: button;
	}
`

export const ApplyButton = styled.button`
	box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
	border: none;
	margin: 15px 0px;
	width: 100%;
	@media (min-width: 1150px) {
		margin: 10px 0px;
		width: fit-content;
	}
	> h3 {
		color: ${colors.white};
		padding: 18px 40px;
		margin: 0 auto;
		text-transform: capitalize;
		@media (min-width: 728px) {
			padding: 18px 20px;
		}
	}
`
