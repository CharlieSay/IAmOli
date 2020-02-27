import React, { FC, Fragment } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { useMediaQuery } from "react-responsive";
import "../scss/components/with-layout.scss";

export const withLayout = <P extends object>(
  ContentComponent: FC<any>
): FC<P> => {
  const WithLayout = (props: P) => {
    const isMobile = useMediaQuery({ query: "(max-width: 459px)" });
    const isDesktop = useMediaQuery({ query: "(min-device-width: 460px)" });

    const footerClassName = `footer-padding-${isMobile?'mobile':'desktop'}`
    return (
      <Fragment>
        {Header && (
          <div>
            <Header />
          </div>
        )}
        <main
          id="content"
          className={
            isDesktop
              ? "content-padding-desktop"
              : isMobile
              ? "content-padding-mobile"
              : "content-padding"
          }
        >
          <ContentComponent {...props} />
        </main>
        {Footer && (
          <div className={footerClassName}>
            <Footer />
          </div>
        )}
      </Fragment>
    );
  };

  return WithLayout;
};
