import React from "react";
 

const AccountLoader = () => {
  return (
    <div className="cooking-loader-wrapper">
      <h1 className="loader-heading">Cooking in progress..</h1>
      <div id="cooking">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>
          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLoader;
