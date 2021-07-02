import styled, { createGlobalStyle } from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import Scrollspy from "react-scrollspy"

export const OverrideGlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.menuOpen ? "hidden" : "auto")}
  }
`
export const Wrapper = styled.div`
  display: block;
  position: fixed;
  background: ${colors.primary};
  left: ${props => (props.menuOpen ? "0px" : "-100%")};
  width: 100%;
  height: 100%;
  top: 0px;
  padding: 0 0 0 40px;
  transition: all 0.4s ease-out;
  z-index: 10;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  @media screen and (min-width: 1150px) {
    display: none;
  }
`

export const NavScroll = styled(Scrollspy)`
  position: absolute;
  width: 80%;
  top: 60px;
  list-style-type: none;
  padding: 0;

  a {
    text-decoration: none;
    color: ${colors.washedGrey};
  }

  li {
    transition: all 0.5s ease;
    cursor: pointer;
    margin: 20px 0;
    font-family: Epilogue, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;
    @media screen and (min-width: 728px) {
      font-size: 30px;
      top: 100px;
      line-height: 60px;
    }
  }
`
export const PrimaryButton = styled.button`
  background: ${colors.white};
  box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
  border: none;
  > h4 {
    color: ${colors.primary};
    font-size: 20px;
    padding: 10px 9px;
    margin: 0px;
    text-transform: capitalize;
  }
`

export const SecondaryButton = styled.button`
  background: ${colors.white};
  box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${colors.primary};
  > h4 {
    color: ${colors.primary};
    font-size: 20px;
    padding: 10px 9px;
    margin: 0px;
  }
  &:hover {
    background: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    > h4 {
      color: ${colors.white};
    }
  }
  &:focus {
    outline: none;
  }
`
