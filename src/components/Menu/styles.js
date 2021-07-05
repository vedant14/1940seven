import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  margin: 10px auto;
  @media screen and (min-width: 728px) {
    margin: 10px 200px 10px auto;
  }
  @media screen and (min-width: 1920px) {
    margin: 10px 560px 10px auto;
  }

  a {
    text-decoration: none;
    color: ${colors.washedBlack};
  }

  ul > li {
    display: inline-block;
    transition: opacity 0.5s ease;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    padding: 15px 0px;
    @media screen and (min-width: 1150px) {
      margin-right: 30px;
    }
    @media screen and (min-width: 1200px) {
      margin-right: 45px;
    }
    @media screen and (min-width: 1350px) {
      margin-right: 80px;
    }
    @media screen and (min-width: 1400px) {
      margin-right: 95px;
    }
    :last-child {
      margin-right: 0px;
    }
  }

  @media screen and (min-width: 1150px) {
    display: block;
  }
`
