import styled from "styled-components"

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	grid-gap: 35px;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}

	position: relative;

	> img#Cart {
		position: absolute;
		right: -10px;
		top: 250px;
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
		width: 130px;
		@media screen and (min-width: 768px) {
			border-radius: 10px;
			width: 200px;
			right: -10px;
			top: 100px;
		}
		@media screen and (min-width: 1324px) {
			width: auto;
			right: -40px;
			top: 140px;
		}
	}
	> img#Merch {
		filter: drop-shadow(5px 5px 5px #914fff);
		width: 720px;
		height: auto;
		max-width: 100%;
		margin: 0px 0px 0px auto;
	}
`
