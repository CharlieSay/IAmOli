import React, { Fragment } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

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
