import styled from "styled-components"

export const HeaderImage = styled.img`
	object-fit: cover;
	position: absolute;
	width: 100%;
	height: 80vh;
	object-position: 30%;
	@media (min-width: 768px) {
		height: 45vh;
		object-position: bottom;
	}
	@media (min-width: 1340px) {
		height: 90vh;
		object-position: bottom;
	}
	@media (min-width: 1920px) {
		height: 70vh;
		object-position: bottom;
	}
`

export const HeaderText = styled.h1`
	animation: fadeInAnimation ease 3s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;

	text-align: center;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	max-width: 300px;
	padding: 200px 0px 350px 0px;
	margin: auto;
	@media (min-width: 768px) {
		text-align: right;
		padding: 130px 0px 130px 0px;
		margin: 0px 0px 0px auto;
	}
	@media (min-width: 1024px) {
		max-width: 500px;
		padding: 150px 0px 150px 0px;
		margin: 0px 0px 0px auto;
	}
	@media (min-width: 1220px) {
		max-width: 500px;
		padding: 220px 0px 330px 0px;
		margin: 0px 0px 0px auto;
	}
	@media (min-width: 1920px) {
		padding: 550px 0px 600px 0px;
		margin: 0px 0px 0px auto;
	}
`
