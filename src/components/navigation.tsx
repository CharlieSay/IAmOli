import React from "react";

import "../scss/components/navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__text__wrapper app-medium">
        <ul>
          <li className="navigation__item">
          <a href="/page2">STORE</a>
          </li>
          <li className="navigation__item">
          <a href="/about">ABOUT</a>
          </li>
          <li className="navigation__item">
          <a href="/portfolio">PORTFOLIO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
