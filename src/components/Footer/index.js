import React from "react"
import { FooterWrapper } from "./styles"
import { Container } from "react-bootstrap"
import Twitter from "../../images/social/Twitter.png"
import Instagram from "../../images/social/Instagram.png"
import Clubhose from "../../images/social/Clubhouse.png"
import Whatsapp from "../../images/social/Whatsapp.png"
import LinkedIn from "../../images/social/LinkedIn.png"

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<Container>
				<div id="title">
					<p>
						Personal Finance Course by Abhishek Agarwal ©{" "}
						{new Date().getFullYear()}
					</p>
					<p>
						Site developed by{" "}
						<a
							href="https://www.vedantlohbare.com/"
							target="_blank"
							rel="noreferrer"
						>
							Vedant Lohbare
						</a>
					</p>
				</div>
				<div id="social">
					<a
						href="https://www.joinclubhouse.com/@aggyabhishek"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Clubhose} alt="Clubhose" />
					</a>
					<a
						href="https://www.instagram.com/aggyabhishek/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Instagram} alt="Instagram" />
					</a>
					<a
						href="https://twitter.com/AggyAbhishek"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Twitter} alt="Twitter" />
					</a>
					<a
						href="https://www.linkedin.com/in/aggyabhishek/"
						target="_blank"
						rel="noreferrer"
					>
						<img src={LinkedIn} alt="LinkedIn" />
					</a>
					<a href="http://wa.me/+919769003072" target="_blank" rel="noreferrer">
						<img src={Whatsapp} alt="Whatsapp" />
					</a>
				</div>
				<div id="disclaimer">
					<p>
						Disclaimer: The information contained on this document and the
						resources available through this document are not intended as, and
						shall not be understood or construed as, financial or investment
						advice. I am not a financial advisor, nor am I holding myself out to
						be one, and the information contained on this document and the
						resources are not a substitute for financial advice from a
						professional who is aware of the facts and circumstances of your
						individual situation. Anyone who goes by information and opinions
						shared in this document do so, at their own risk. The author is not
						responsible or liable for any gains or losses that may result from
						the use of the information presented here. By purchasing access you
						are acknowledging and confirming you have read the disclaimer.
					</p>
				</div>
			</Container>
		</FooterWrapper>
	)
}
