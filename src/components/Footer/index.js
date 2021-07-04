import React from "react"
import { Link } from "gatsby"
import { FooterWrapper } from "./styles"
import Twitter from "../../images/social/twitter.png"
import Instagram from "../../images/social/instagram.png"
import Logo from "../../images/logo/logo-white.png"
export function Footer() {
	return (
		<FooterWrapper>
			<div>
				<div>
					<img src={Logo} alt="Logo" id="Logo" />
					<div id="social">
						<p>Follow us on:</p>
						<a
							href="https://www.w3schools.com/css/css3_2dtransforms.asp"
							target="_blank"
						>
							<img src={Twitter} alt="Twitter" />
						</a>
						<a
							href="https://www.w3schools.com/css/css3_2dtransforms.asp"
							target="_blank"
						>
							<img src={Instagram} alt="Instagram" />
						</a>
					</div>
				</div>
				<div id="links">
					<Link to="/">Home</Link>
					<Link to="/">T&Cs</Link>
					<Link to="/">Privacy Policy</Link>
					<Link to="/">Contact Us</Link>
				</div>
			</div>
		</FooterWrapper>
	)
}
