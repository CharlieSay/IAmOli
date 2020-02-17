import React from "react";
import { useMediaQuery } from "react-responsive";

import "../scss/components/footer.scss";

export const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
  const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

  return (
    <footer className="footer__parent app-medium">
      {isDesktop && (
        <div className="footer__nav">
          <div className="footer__lists">
            <section>
              <ul>
                <li>COPYRIGHT © IAMOLI</li>
              </ul>
            </section>
            <section>
              <ul>
                <a href="mailto:oli@iamoli.com">
                  <li>CONTACT ME</li>
                </a>
              </ul>
            </section>
            <section>
              <ul>
                <a href="//www.instagram.com/charliesay">
                  <li>WEBSITE BY CHARLIE SAY</li>
                </a>
              </ul>
            </section>
          </div>
        </div>
      )}
    </footer>
  );
};
