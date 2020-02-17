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
                <li>
                  <a href="mailto:oli@iamoli.com">CONTACT ME</a>
                </li>
              </ul>
            </section>
            <section>
              <ul>
                <li>
                  <a href="//www.instagram.com/charliesay">
                    WEBSITE BY CHARLIE SAY
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      )}
    </footer>
  );
};
