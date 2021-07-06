import styled from "styled-components"

export const ScrollWrapper = styled.div`
	content: "";
	height: 100px;
	@media (min-width: 728px) {
		height: 70px;
	}
	@media (min-width: 1150px) {
		height: 200px;
	}
`
