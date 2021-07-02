import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../styles/GlobalStyles"
export const HeaderWrapper = styled.header`
  background: ${colors.washedGrey};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  margin: auto;
  top: 0;
  z-index: 999;
  padding: 10px 20px;
  display: flex;
  min-height: 90px;
  > div:first-child {
    margin: 10px 20px;
  }
`

export const PrimaryButton = styled.a`
  display: none;
  position: absolute;
  @media screen and (min-width: 768px) {
    margin: 10px 40px;
    right: 30px;
    display: block;
  }
`
export const Secondary = styled(Link)`
  display: none;
  position: absolute;
  @media screen and (min-width: 768px) {
    margin: 10px 250px;
    right: 30px;
    display: block;
  }
  > button {
    background: ${colors.white};
    box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid ${colors.primary};
    > h4 {
      color: ${colors.primary};
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
  }
`
