import React from "react";
import { useMediaQuery } from "react-responsive";
import FadeIn from "react-fade-in";

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
                <FadeIn>
                  <li>COPYRIGHT © IAMOLI</li>
                </FadeIn>
              </ul>
            </section>
            <section>
              <ul>
                <a href="mailto:oli@iamoli.com">
                  <FadeIn>
                    <li>CONTACT ME</li>
                  </FadeIn>
                </a>
              </ul>
            </section>
            <section>
              <ul>
                <a href="//www.instagram.com/charliesay">
                  <FadeIn>
                    <li>WEBSITE BY CHARLIE SAY</li>
                  </FadeIn>
                </a>
              </ul>
            </section>
          </div>
        </div>
      )}
    </footer>
  );
};
