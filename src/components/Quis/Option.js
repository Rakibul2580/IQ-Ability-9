import React from "react";

const Option = ({ handleAns, correctAnswer, option }) => {
  return (
    <label
      onClick={() => handleAns(correctAnswer, option)}
      className="flex items-center p-3 rounded-md bg-sky-200 shadow-xl text-black font-medium mt-3"
    >
      <input type="radio" name="radio-6" className="radio radio-accent" />
      <p className="ml-2">{option}</p>
    </label>
  );
};

export default Option;
