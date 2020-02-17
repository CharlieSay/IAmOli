import React from "react";
import { useMediaQuery } from "react-responsive";
import iconNav from "../assets/svgs/icon-nav.svg";

import "../scss/components/header.scss";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isMedDesktopLow = useMediaQuery({ query: "(min-device-width: 460px)" });
  const isMedDesktopHigh = useMediaQuery({ query: "(max-width: 744px)" });
  const isWideDesktop = useMediaQuery({ query: "(min-device-width: 745px)" });
  const isMediumDesktop = isMedDesktopLow && isMedDesktopHigh;

  return (
    <header className="header__parent app">
      {isWideDesktop && (
        <div className="header__row">
          <section>
            <ul className="app-medium header__item header__item__navigation">
              <a href="/page2">STORE</a>
              <a href="/about">ABOUT</a>
              <a href="/portfolio">PORTFOLIO</a>
            </ul>
          </section>
          <section>
            <ul className="header__item header__item__name">
              <a href="/">
                <span>I AM OLI</span>
              </a>
            </ul>
          </section>
          <section>
            <ul className="app-medium header__item header__item__socials">
              <a href="//www.twitter.com"> T </a>
              <a href="//www.facebook.com"> F </a>
              <a href="//www.instagram.com"> I </a>
              <a href="//www.vimeo.com"> V </a>
            </ul>
          </section>
        </div>
      )} 
      {(isMediumDesktop) && (
        <div className="header__row">
          <section>
            <ul className="app-medium header__item header__item__navigation">
              <a href="/page2">STORE</a>
              <a href="/about">ABOUT</a>
              <a href="/portfolio">PORTFOLIO</a>
            </ul>
          </section>
          <section>
            <ul className="header__item header__item__name">
              <a href="/">
                <span>I AM OLI</span>
              </a>
            </ul>
          </section>
        </div>
      )}
      {isMobile && (
        <div className="header__row header__row__mobile">
          <section className="header__item__hamburger__nav">
            <img src={iconNav} alt="hamburger_icon" />
          </section>
          <section>
            <a href="/">
              <span className="header__item header__item__name__mobile">I AM OLI</span>
            </a>
          </section>
        </div>
      )}
    </header>
  );
};
