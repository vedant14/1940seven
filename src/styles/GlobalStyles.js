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
    font-size: 40px;
    line-height: 40px;
    @media screen and (min-width: 768px) {
      font-size: 50px;
      line-height: 45px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 70px;
      line-height: 70px;
    }
  }

  h2{
    font-family: 'Poppins', sans-serif;    
    margin: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 30px;

    @media screen and (min-width: 768px) {
      margin: auto;
      font-size: 44px;
      line-height: 38px;
    }
    @media screen and (min-width: 1024px) {
      margin: auto;
      font-size: 50px;
      line-height: 52px;
    }
    

  }

  h3{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 20px;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 28px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 42px;
      line-height: 47px;
    }
  }

  h4{
    font-family: 'Poppins', sans-serif;    
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 20px;
    @media screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
  }

  p,a {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 28px;
    }
  }

  strong {
    font-weight: 500;
  }


  a {
    text-decoration: none;
    border-bottom: 2px solid ${colors.violet};
    font-weight: 500;
    padding-bottom: 5px;
    color: ${colors.white};
    transition-duration: 0.35s;
    transition-timing-function: ease;
    &:hover {
      color: ${colors.white};
      border-bottom: 4px solid ${colors.violet};
      padding-bottom: 3px;
    }
  }

  li {
    color: ${colors.washedBlack};
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    > strong{
      color: ${colors.primaryBlack};
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }


  small {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    border-bottom: 2px solid ${colors.violet};
    padding-bottom: 2px;
  }


  .violet {
    color: ${colors.violet};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }

  .violet-wo{
    color: ${colors.violet};
  }


  .Container {
    margin: auto 30px;
    @media screen and (min-width: 768px) {
      margin: auto 60px;
    }
    @media screen and (min-width: 1024px) {
      margin: auto 60px;
    }
    @media screen and (min-width: 1324px) {
      margin: auto 150px;
    }
    @media screen and (min-width: 1920px) {
      max-width: 1400px;
      margin: auto;
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

  .slide-in-section {
    opacity: 0;
    transform: translateX(-20vh);
    visibility: hidden;
    will-change: opacity, visibility;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .first-slide{
    transition-delay: 0.1s
  }

  .second-slide{
    transition-delay: 0.5s
  }

  .third-slide{
    transition-delay: 1s
  }
  .fade-in-section {
    opacity: 0;
    transform: translateY(10vh);
    visibility: hidden;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    will-change: opacity, visibility;
    transition-delay: 0.5s;
  }
  
  .fade-in-slow-section {
    opacity: 0;
    transform: translateY(10vh);
    visibility: hidden;
    transition: opacity 1s ease-out, transform 1s ease-out;
    will-change: opacity, visibility;
    transition-delay: 0.5s;
  }
  

  .is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  .mb-100 {
    @media (min-width: 1920px) {
      margin-bottom: 100px;
    }
  }

  .zero-mg{
    margin-top: -20px !important;
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
