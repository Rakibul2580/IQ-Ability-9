import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Prinquis = ({ item, handleAns }) => {
  const { question, options, correctAnswer } = item;
  const getAns = (ans) => {
    Swal.fire({
      title: ans,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <div className="border-4 border-sky-300 rounded-md shadow-2xl m-10 p-5 bg-white">
        <div className="blog md:flex md:justify-between">
          <h1 className="text-2xl font-semibold text-black">
            Quiz : {question.replace("<p>", " ").replace("</p>", " ")}
          </h1>
          <button>
            <FontAwesomeIcon
              onClick={() => getAns(correctAnswer)}
              className="text-black"
              icon={faEye}
            />
          </button>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {options.map((option) => (
            <label
              onClick={() => handleAns(correctAnswer, option)}
              className="flex items-center p-3 rounded-md bg-sky-200 shadow-xl text-black font-medium mt-3"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio radio-accent"
                clicked
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
