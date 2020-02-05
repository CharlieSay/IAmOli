import React, { Fragment } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Main = () => {
  return (
    <Fragment>
        <Header />
        <div
          className="App"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a
            className="App-link"
            href="https://instagram.com/charliesay:"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </div>
        <Footer />
    </Fragment>
  );
};

export default Main;
