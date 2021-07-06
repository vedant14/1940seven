import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Wrapper } from "./styles"
import { Scroll } from "../Scroll"
import MerchImage from "../../images/banner/merch.png"
import Cart from "../../images/banner/cart.png"
export function Merch() {
	return (
		<>
			<Scroll id="Learn" />
			<Wrapper className="Container">
				<div>
					<h2>In India. In INR. </h2>
					<p>
						Now you can Buy merchandise from your favorite creators. Now you can
						Buy merchandise from your favorite creators. Now you can Buy
						merchandise from your favorite creators
					</p>
					<AnchorLink href="#About">Learn more</AnchorLink>
				</div>
				<img src={MerchImage} alt="Merch" id="Merch" />
				<img src={Cart} alt="Cart" id="Cart" />
			</Wrapper>
		</>
	)
}
