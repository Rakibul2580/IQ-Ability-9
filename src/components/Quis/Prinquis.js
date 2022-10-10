import React from "react";

const Prinquis = ({ item }) => {
  console.log(item);
  const { question, options, correctAnswer } = item;
  const x = (a, b) => {
    if (a == b) {
      alert("Right");
    } else {
      alert("Rog");
    }
  };
  return (
    <div>
      <div className="border-4 border-sky-300 rounded-md shadow-2xl m-10 p-5 bg-white">
        <h1 className="text-2xl font-semibold text-black">Quiz : {question}</h1>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {options.map((option) => (
            <div
              onClick={() => x(correctAnswer, option)}
              className="flex items-center p-3 rounded-md bg-sky-200 shadow-xl text-black mt-3"
            >
              <input
                type="radio"
                name="radio"
                className="radio radio-accent"
                checked
              />
              <p className="ml-2 text-black font-medium">{option}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prinquis;
