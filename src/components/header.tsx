import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "./navigation";
import { SocialHeader } from "./social";
import iconNav from "../assets/svgs/icon-nav.svg";

import "./header.scss";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <header>
      <div className="header_parent o-page-align">
        {isDesktop && (
          <div className="header_row">
            <div className="child-container">
              <Navigation />
            </div>
            <div className="logo-container">
              <a href="/" className="logo-child-desktop">
                <span>I AM OLI</span>
              </a>
            </div>
            <div className="child-container">
              <SocialHeader />
            </div>
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
