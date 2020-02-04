import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
        <a
          className="App-link"
          href="https://instagram.com/charliesay:"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
