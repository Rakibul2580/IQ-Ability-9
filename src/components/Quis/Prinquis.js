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
        <div className="flex justify-between">
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
        <div className="grid grid-cols-2 gap-4 mt-3">
          {options.map((option) => (
            <laval className="flex items-center p-3 rounded-md bg-sky-200 shadow-xl text-black font-medium mt-3">
              <input
                onClick={() => handleAns(correctAnswer, option)}
                type="radio"
                name="radio"
                className="radio radio-accent"
                checked
              />
              <p className="ml-2">{option}</p>
            </laval>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prinquis;
