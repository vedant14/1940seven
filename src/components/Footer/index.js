import React from "react"
import { Link } from "gatsby"
import { FooterWrapper, LastStrip } from "./styles"
import Logo from "../../images/logo/logo-white.png"
import TwitterIcon from "../../images/icons/twitter.png"
import InstagramIcon from "../../images/icons/instagram.png"
export function Footer() {
	return (
		<FooterWrapper>
			<div className="Container">
				<div>
					<img src={Logo} alt="Logo" id="Logo" />
					<p>
						Vedant is writing a small description to be displayed on the footer
						to make it simple.
					</p>
				</div>
				<div>
					<div id="links">
						<Link to="/">Home</Link>
						<Link to="/terms">T&Cs</Link>
						<Link to="/privacy-policy">Privacy Policy</Link>
						<Link to="/refund-policy">Refund Policy</Link>
					</div>
					<div id="social">
						<p>Follow us on:</p>
						<a
							href="https://www.w3schools.com/css/css3_2dtransforms.asp"
							target="_blank"
						>
							<img src={TwitterIcon} />
						</a>
						<a
							href="https://www.w3schools.com/css/css3_2dtransforms.asp"
							target="_blank"
						>
							<img src={InstagramIcon} />
						</a>
					</div>
				</div>
			</div>
			<LastStrip>
				<p>
					<strong>
						© {new Date().getFullYear()}, 1940seven | All rights reserved | Made
						in India
					</strong>
				</p>
			</LastStrip>
		</FooterWrapper>
	)
}
