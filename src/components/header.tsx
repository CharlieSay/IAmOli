import React from "react";
import { useMediaQuery } from "react-responsive";

import iconNav from "../assets/svgs/icon-nav.svg";
import twitterIcon from "../assets/svgs/twitter.svg";
import facebookIcon from "../assets/svgs/facebook.svg";
import instagramIcon from "../assets/svgs/instagram.svg";
import youtubeIcon from "../assets/svgs/youtube.svg";

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
              <a href="//www.twitter.com/OliWolstencroft"> <img src={twitterIcon} alt="Twitter Icon"/> </a>
              <a href="//www.facebook.com"> <img src={facebookIcon} alt="Facebook Icon"/>  </a>
              <a href="//www.instagram.com/oliwolstencroft"> <img src={instagramIcon} alt="Instagram Icon"/>  </a>
              <a href="//www.youtube.com/channel/UC15gNBeVDMlmpEksvTQMhrg"> <img src={youtubeIcon} alt="Youtube Icon"/>  </a>
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
        <div className="header__row">
          <section className="header__row__mobile">
            <a href="/">
              <span className="header__item__name__mobile">I AM OLI</span>
            </a>
          </section>
        </div>
      )}
    </header>
  );
};
