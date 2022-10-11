import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import error from "./93949-pex-not-found.gif";

const Errorpage = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
        <div className="flex items-center justify-center">
          <img src={error} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-sky-800 font-bold text-8xl">404</h1>
            <h4 className="text-yellow-500 font-bold text-3xl my-5">
              Page Not Found
            </h4>
            <Link to={"/"} className="btn btn-primary">
              go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
