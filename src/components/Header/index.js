import React, { useState } from "react"
import { HeaderWrapper, Secondary, PrimaryButton } from "./styles"
import { Menu } from "../Menu"
import { Hamburger } from "../Hamburger"
import { MobileMenu } from "../MobileMenu"
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"

export function Header({ page }) {
	const [menuOpen, setMenuOpen] = useState(false)
	const siteConfig = useSiteConfigQuery()
	return (
		<HeaderWrapper>
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			{page === "wall" ? (
				<>
					<Menu />
					<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				</>
			) : (
				<>
					<Menu items={siteConfig.menu} />
					<MobileMenu
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
						items={siteConfig.menu}
					/>
					<Secondary to="/wall-of-love">
						<button>
							<h4>
								Wall of Love{" "}
								<span role="img" aria-label="rocket">
									❤️
								</span>
							</h4>
						</button>
					</Secondary>
				</>
			)}

			<PrimaryButton
				href="https://www.instamojo.com/@AggyAbhishek/l141f83f9226c47549fa38b651e0641b7/"
				target="_blank"
				rel="noreferrer"
			>
				<button className="buy-button">
					<h4>
						Get the course{"  "}
						<span role="img" aria-label="rocket">
							🚀
						</span>
					</h4>
				</button>
			</PrimaryButton>
		</HeaderWrapper>
	)
}
