import React from "react";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav className="nav-wrapper nav-item">
      <div className="app-medium nav-text-wrapper">
        <a href="/page2"><span>STORE</span></a>
        <a href="/about"><span>ABOUT</span></a>
        <a href="/portfolio"><span>PORTFOLIO</span></a>
      </div>
    </nav>
  );
};
