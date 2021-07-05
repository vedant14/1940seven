import styled from "styled-components"
export const HeaderWrapper = styled.header`
  position: fixed;
  backdrop-filter: blur(10px);
  margin: auto;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  padding: 10px 30px;
  @media screen and (min-width: 768px) {
    padding: 10px 90px;
  }
  @media screen and (min-width: 1920px) {
    padding: 10px 280px;
  }
`

export const LogoWrapper = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
