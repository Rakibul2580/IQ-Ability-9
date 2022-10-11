import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-md z-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-bold text-cyan-900">
            daisyUI
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex-none  hidden sm:block">
            <ul className="menu menu-horizontal p-0 text-cyan-900 font-medium">
              <li>
                <NavLink to={"/"}>Topics</NavLink>
              </li>
              <li>
                <NavLink to={"/statistics"}>Statistics</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end sm:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Topics</NavLink>
              </li>
              <li>
                <NavLink to={"/statistics"}>Statistics</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
