import { createGlobalStyle } from "styled-components"

export const colors = {
  white: "#FFFFFF",
  dark: "#030C10",
  grey: "#D9D6D9",
  violet: "#914FFF",
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.dark}; 
    color: ${colors.white};
    margin: 0;
    padding: 0;
  }


  h1{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    @media screen and (min-width: 768px) {
      font-size: 70px;
      line-height: 70px;
    }
  }

  h2{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    @media screen and (min-width: 768px) {
      font-size: 50px;
      line-height: 52px;
    }
  }

  h3{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    @media screen and (min-width: 768px) {
      font-size: 42px;
      line-height: 47px;
    }
  }

  h4{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    @media screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
  }

  strong {
    font-weight: 500;
  }

  small {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    border-bottom: 2px solid ${colors.violet};
    padding-bottom: 2px;
  }

  a {
    text-decoration: none;
    border-bottom: 2px solid ${colors.violet};
    padding-bottom: 5px;
    color: ${colors.white};
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px; 
    transition-duration: 0.35s;
    transition-timing-function: ease;
    &:hover {
      color: ${colors.white};
      border-bottom: 4px solid ${colors.violet};
      padding-bottom: 3px;
    }
  }

  .violet {
    color: ${colors.violet};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }



  .Container {
    margin: auto 30px;
    @media screen and (min-width: 768px) {
      margin: auto 90px;
    }
    @media screen and (min-width: 1920px) {
      margin: 200px 400px;
    }
  }


  .underline{
    border-bottom: 2px solid ${colors.violet};
    padding-bottom: 5px;
  }
  .is-current{
    > a {
      border-bottom: 4px solid ${colors.violet};
      padding-bottom: 3px;
    }
  }
  
  .is-current-mobile{
    > a {
      color: ${colors.white} !important;
      &:after {
        content: " •"
      }
    }
  }


  .buy-button{
    background: ${colors.primary};
    box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid ${colors.primary};
    > h4 {
      color: ${colors.white};
      padding: 10px 9px;
      margin: 0px;
      text-transform: capitalize;
    }
    &:hover{
      background: ${colors.secondary};
      border: 1px solid ${colors.secondary};
    }
    &:focus{
      outline: none;
    }
  }

  .slick-arrow:before {
    color: ${colors.primaryBlack};
  }
  .slick-prev {
    position: absolute;
    top: 100%;
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    z-index: 100;
    left: 45%;
  }
  .slick-next {
    position: absolute;
    top: 100%;
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    z-index: 100;
    left: 55%;
  }
`
