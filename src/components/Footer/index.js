import React from "react"
import { Link } from "gatsby"
import { FooterWrapper, LastStrip } from "./styles"
import Logo from "../../images/logo/logo-white.png"
import TwitterIcon from "../../images/icons/twitter.png"
import FacebookIcon from "../../images/icons/facebook.png"
import MailIcon from "../../images/icons/mail.png"

import InstagramIcon from "../../images/icons/instagram.png"
export function Footer() {
	return (
		<FooterWrapper>
			<div className="Container">
				<div>
					<img src={Logo} alt="Logo" id="Logo" />
					<p>
						Now you can buy licensed merchandise from your favorite creators,
						artists, influencers.
					</p>
				</div>
				<div id="right-align">
					<div id="links">
						<Link to="/">Home</Link>
						<Link to="/terms">T&Cs</Link>
						<Link to="/privacy-policy">Privacy Policy</Link>
						<Link to="/refund-policy">Refund Policy</Link>
					</div>
					<div id="social">
						<p>Stay connected:</p>
						<a
							href="https://www.w3schools.com/css/css3_2dtransforms.asp"
							target="_blank"
						>
							<img src={TwitterIcon} />
						</a>
						<a href="https://www.facebook.com/1940seven" target="_blank">
							<img src={FacebookIcon} />
						</a>
						<a href="https://instagram.com/1940.seven" target="_blank">
							<img src={InstagramIcon} />
						</a>
						<a href="https://instagram.com/1940.seven" target="_blank">
							<img src={MailIcon} />
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
