import styled from "styled-components"
import { Container } from "react-bootstrap"

export const TweetWrapper = styled(Container)`
	display: grid !important;
	grid-gap: 10px;
	min-height: 50vh;
	> a {
		text-align: center;
	}
	> div {
		> iframe {
			max-width: 100% !important;
		}
	}
	grid-template-columns: 1fr;
	@media screen and (min-width: 550px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (min-width: 1050px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`

export const TwitterWrapper = styled.div`
	> h1,
	h2 {
		text-align: center;
	}
	> h1 {
		margin: 50px 0px 30px 0px;
	}
	> h2 {
		margin: 10px 0px;
	}
	> hr {
		margin: 40px auto;
		width: 50%;
	}
`

export const TweetLoad = styled.div`
	> img {
		margin: 0px 100px;
		width: 50px;
	}
`
