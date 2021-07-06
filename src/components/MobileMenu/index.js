import React from "react"
// Styles
import { OverrideGlobalStyle, NavScroll, Wrapper, BoxLink } from "./styles"
import AnchorLink from "react-anchor-link-smooth-scroll"

export function MobileMenu({ menuOpen, items, setMenuOpen }) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <NavScroll
          items={items.map(item => item.link)}
          currentClassName="is-current-mobile"
          offset={-64}
        >
          {items.map(item => (
            <AnchorLink href={`#${item.link}`}>
              <li key={item.id} onClick={() => setMenuOpen(false)}>
                {item.name}
              </li>
            </AnchorLink>
          ))}
        </NavScroll>
      </Wrapper>
    </>
  )
}
