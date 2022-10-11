import React from "react";
import "../../components/All.css";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="bgimg pb-72 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <h1 className="text-6xl font-bold text-white pt-60">
            Welcome check your coding ability
          </h1>
          <p className="text-2xl font-medium text-white mt-7">
            Hard work is the key to success. Work hard today rest tomorrow.
            Remember that time waits for no one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
