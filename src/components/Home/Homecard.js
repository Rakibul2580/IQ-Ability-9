import React from "react";
import { Link } from "react-router-dom";

const Homecard = ({ item }) => {
  const { id, name, logo, total } = item;
  return (
    <div className="card card-compact w-full bg-slate-200 shadow-xl">
      <figure className="p-2 transition">
        <img
          src={logo}
          alt="Shoes"
          className="w-full bg-slate-400 rounded-lg hover:translate-y-6 transition"
        />
      </figure>
      <div className="p-5 justify-between items-center bg-slate-500 blog sm:flex">
        <h2 className="sm:card-title">{name}</h2>
        <p>{total}</p>
        <div className="card-actions justify-end">
          <Link to={`items/${id}`} className="btn btn-primary w-full">
            Start Practice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
