import React from "react";
import "./footer.scss";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <footer className="footer__nav">
      <div className="app-medium  ">
        {isDesktop && (
          <div className="footer-parent">
            <div className="child">
              <span>COPYRIGHT © IAMOLI</span>
            </div>
            <div className="child">
              <a href="mailto:oli@">
                {" "}
                <span>CONTACT ME</span>{" "}
              </a>
            </div>
            <div className="child">
              <a href="//www.instagram.com/charliesay">
                {" "}
                <span>WEBSITE BY CHARLIE SAY</span>{" "}
              </a>
            </div>
          </div>
        )}
        {isMobile && (
          <div className="child__mobile">
            <span>COPYRIGHT © IAMOLI</span>
          </div>
        )}
      </div>
    </footer>
  );
};
