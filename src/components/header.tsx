import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "./navigation";
import { SocialHeader } from "./social";
import "./header.scss";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 460px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  return (
    <Fragment>
      <div className="header_parent o-page-align">
        {isDesktop && (
          <div className="desktop">
            <div className="child-container">
              <Navigation />
            </div>
            <div className="logo-container">
              <a href="/" className="logo-child">
                I AM OLI
              </a>
            </div>
            <div className="child-container">
              <SocialHeader />
            </div>
          </div>
        )}
        {isMobile && (
          <div className="mobile-header">
            <div className="child-container">
                <img src={'src/assets/svgs/icon-nav.svg'} />
            </div>
            <div className="logo-container">
              <a href="/" className="logo-child">
                MOBILE HEADER
              </a>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
