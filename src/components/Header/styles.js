import styled from "styled-components"
export const HeaderWrapper = styled.header`
  position: fixed;

  backdrop-filter: ${props => (props.menuOpen ? "none" : "blur(10px)")};
  top: 0;
  z-index: 999;
  width: 100%;
  > div {
    display: flex;
  }
`

export const LogoWrapper = styled.img`
  width: 200px;
  height: 100%;
  margin: auto 10px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
