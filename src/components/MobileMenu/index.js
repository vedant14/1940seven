import React from "react"
// Styles
import { Link } from "gatsby"
import {
  OverrideGlobalStyle,
  NavScroll,
  Wrapper,
  PrimaryButton,
  SecondaryButton,
} from "./styles"
import AnchorLink from "react-anchor-link-smooth-scroll"

export function MobileMenu({ menuOpen, items, setMenuOpen }) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        {items ? (
          <NavScroll
            items={items.map(item => item.link)}
            currentClassName="is-current-mobile"
            offset={-64}
          >
            {items.map(item => (
              <li key={item.id} onClick={() => setMenuOpen(false)}>
                <AnchorLink href={`#${item.link}`}>{item.name}</AnchorLink>
              </li>
            ))}
            <li>
              <Link to="/wall-of-love">
                <SecondaryButton>
                  <h4>
                    Wall of Love{" "}
                    <span role="img" aria-label="rocket">
                      ❤️
                    </span>
                  </h4>
                </SecondaryButton>
              </Link>
            </li>
            <li>
              <a
                href="https://www.instamojo.com/@AggyAbhishek/l141f83f9226c47549fa38b651e0641b7/"
                target="_blank"
                rel="noreferrer"
              >
                <PrimaryButton>
                  <h4>
                    Get the course {"  "}
                    <span role="img" aria-label="rocket">
                      🚀
                    </span>
                  </h4>
                </PrimaryButton>
              </a>
            </li>
          </NavScroll>
        ) : (
          <NavScroll>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
            <li>
              <a
                href="https://www.instamojo.com/@AggyAbhishek/l141f83f9226c47549fa38b651e0641b7/"
                target="_blank"
                rel="noreferrer"
              >
                <PrimaryButton>
                  <h4>
                    Get the course {"  "}
                    <span role="img" aria-label="rocket">
                      🚀
                    </span>
                  </h4>
                </PrimaryButton>
              </a>
            </li>
          </NavScroll>
        )}
      </Wrapper>
    </>
  )
}
