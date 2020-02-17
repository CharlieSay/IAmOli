import React from "react";
import { useMediaQuery } from "react-responsive";
import iconNav from "../assets/svgs/icon-nav.svg";

import "../scss/components/header.scss";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <header>
      <div className="header__parent app">
        {isDesktop && (
          <div className="header__row">
            <section className="app-medium">
              <ul>
                <a href="/page2">STORE</a>
                <a href="/about">ABOUT</a>
                <a href="/portfolio">PORTFOLIO</a>
              </ul>
            </section>
            <section>
              <a href="/">
                <span>I AM OLI</span>
              </a>
            </section>
            <section className="app-medium">
              <ul>
                <a href="//www.twitter.com"> T </a>
                <a href="//www.facebook.com"> F </a>
                <a href="//www.instagram.com"> I </a>
                <a href="//www.vimeo.com"> V </a>
              </ul>
            </section>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="mobile-header">
          <div className="hamburger_nav">
            <img src={iconNav} alt="hamburger_icon" />
          </div>
          <div>
            <a href="/">
              <span className="logo-child-mobile">I AM OLI</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
