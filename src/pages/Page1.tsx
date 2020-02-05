import React, { Fragment } from "react";

const Page1 = () => {
  return (
    <Fragment>
      <div
        className="App"
        style={{ display: "nowrap", justifyContent: "center" }}
      >
        <h1> Home Page </h1>
        <div>
          <a
            className="App-link"
            href="https://instagram.com/charliesay:"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Page1;
