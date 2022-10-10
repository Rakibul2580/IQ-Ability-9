import React from "react";
import "../../components/All.css";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="bgimg pb-72 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <h1 className="text-6xl font-bold text-white pt-60">
            Material Kit 2
          </h1>
          <p className="text-2xl font-medium text-white mt-7">
            Free & Open Source Web UI Kit built over Bootstrap 5. Join over 1.6
            million developers around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
