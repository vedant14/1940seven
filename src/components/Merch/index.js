import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./styles"
import MerchImage from "../../images/banner/merch.png"
import Cart from "../../images/banner/cart.png"
export function Merch() {
	return (
		<Wrapper>
			<div>
				<h4>Now you can Buy merchandise from your favorite creators</h4>
				<h2>In India. In INR. </h2>
				<Link to="/">Learn more</Link>
			</div>
			<img src={MerchImage} alt="Merch" id="Merch" />
			<img src={Cart} alt="Cart" id="Cart" />
		</Wrapper>
	)
}
