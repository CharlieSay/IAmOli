import React from "react";
import '../scss/components/error-page.scss'

const SomethingWentWrong = () => {
  return (
    <div className="o-page-align error" style={{padding:"50px",display:"flex",justifyContent:"center"}} >
      <span className="app">Something went wrong just then.</span>
    </div>
  );
};

export default SomethingWentWrong;
