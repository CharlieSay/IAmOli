import React, { FC, Fragment } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import "../scss/components/with-layout.scss";

export const withLayout = <P extends object>(
  ContentComponent: FC<any>
): FC<P> => {
  const WithLayout = (props: P) => {
    return (
      <Fragment>
        {Header && (
          <div>
            <Header />
          </div>
        )}
        <main id="content" className="content-padding">
          <ContentComponent {...props} />
        </main>
        {Footer && (
          <div className="content-padding">
            <Footer />
          </div>
        )}
      </Fragment>
    );
  };

  return WithLayout;
};
