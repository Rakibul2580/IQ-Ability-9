import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-md z-10 fixed left-0 right-0 top-0">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-bold text-cyan-900">
            IQ Ability
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex-none  hidden sm:block">
            <ul className="menu menu-horizontal p-0 text-cyan-900 font-medium">
              <li className="mx-2">
                <NavLink to={"/"}>Topics</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to={"/statistics"}>Statistics</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end sm:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="text-cyan-800">
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Topics</NavLink>
              </li>
              <li className="mt-2">
                <NavLink to={"/statistics"}>Statistics</NavLink>
              </li>
              <li className="mt-2">
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
