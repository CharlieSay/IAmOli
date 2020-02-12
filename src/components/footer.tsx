import React from "react";
import "./footer.scss";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <div className="app-medium o-page-align">
      {isDesktop && (
        <div className="footer-parent">
          <div className="child">
            <span>COPYRIGHT © IAMOLI</span>
          </div>
          <div className="child">
            <span>CONTACT ME</span>
          </div>
          <div className="child">
            <span>WEBSITE BY CHARLIE SAY</span>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="child__mobile">
          <span>COPYRIGHT © IAMOLI</span>
        </div>
      )}
    </div>
  );
};
