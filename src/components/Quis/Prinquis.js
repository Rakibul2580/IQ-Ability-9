import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import Option from "./Option";
import { Link } from "react-router-dom";

const Prinquis = ({ item, handleAns }) => {
  const { question, options, correctAnswer } = item;
  const notify = (ans) => toast(ans);
  return (
    <div>
      <div className="border-4 border-sky-300 rounded-md shadow-2xl m-5 mt-2 md:m-10 p-5 bg-white">
        <div className="blog md:flex md:justify-between">
          <h1 className="text-2xl font-semibold text-black">
            Quiz : {question.replace("<p>", " ").replace("</p>", " ")}
          </h1>
          <Link>
            <FontAwesomeIcon
              onClick={() => notify(correctAnswer)}
              className="text-black"
              icon={faEye}
            />
            <ToastContainer />
          </Link>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {options.map((option, id) => (
            <label
              key={id}
              className="flex items-center p-3 rounded-md bg-sky-200 shadow-xl text-black font-medium mt-3"
            >
              <input
                onClick={() => handleAns(correctAnswer, option)}
                type="radio"
                name="radio-6"
                className="radio radio-accent"
              />
              <p className="ml-2">{option}</p>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Prinquis;
