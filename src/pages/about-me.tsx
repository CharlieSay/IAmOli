import React, { Fragment } from "react";
import ProfilePicture from "../assets/img/oli_profile.jpg"
import '../scss/pages/about-me.scss'

const Page2 = () => {
  return (
    <Fragment>
      <div className="about__me">
        <img className="about__me__profile" src={ProfilePicture} width="250" height="250"></img>
        <h1>Hi, I Am Oli.</h1>
        <h3>UK film industry, Data Wrangler</h3>
        <span>VFX assistant data wrangler </span>
      </div>
    </Fragment>
  );
};

export default Page2;
