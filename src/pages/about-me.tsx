import React, { Fragment } from "react";
import ProfilePicture from "../assets/img/oli_profile.jpg"
import '../scss/pages/about-me.scss'

const AboutMe = () => {
  return (
    <Fragment>
      <div className="about__me">
        <img className="about__me__profile" src={ProfilePicture} width="250" height="250" alt="oliver"></img>
        <h1>Hi, I Am Oli.</h1>
        <h3>UK film industry, Data Wrangler</h3>
        <span>VFX assistant data wrangler </span>
      </div>
    </Fragment>
  );
};

export default AboutMe;
