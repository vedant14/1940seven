import React, { useState } from "react"
import { HeaderWrapper, LogoWrapper } from "./styles"
import { Menu } from "../Menu"
import { Hamburger } from "../Hamburger"
import { MobileMenu } from "../MobileMenu"
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"
import Logo from "../../images/logo/logo-white.png"

export function Header({ page }) {
	const [menuOpen, setMenuOpen] = useState(false)
	const siteConfig = useSiteConfigQuery()
	return (
		<HeaderWrapper>
			<LogoWrapper src={Logo} alt="Logo" />
			<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} id="Hamburger" />
			<Menu items={siteConfig.menu} />
			<MobileMenu
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				items={siteConfig.menu}
			/>
		</HeaderWrapper>
	)
}
