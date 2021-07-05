import styled from "styled-components"

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 100px;
	margin-bottom: 100px;
	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	position: relative;

	> img#Cart {
		position: absolute;
		right: -40px;
		top: 140px;
		box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
	}
	> img#Merch {
		filter: drop-shadow(5px 5px 5px #914fff);
		width: 720px;
		height: auto;
		max-width: 100%;
		margin: 0px 0px 0px auto;
	}
`
