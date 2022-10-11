import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Prinquis from "./Prinquis";
import Swal from "sweetalert2";

const Quis = () => {
  const datas = useLoaderData();
  const [truecount, setTruecount] = useState(0);
  const [falsecount, setFalsecount] = useState(0);
  const handleAns = (correctAnswer, option) => {
    if (correctAnswer == option) {
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      setTruecount((count) => count + 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Are you sure?",
        showConfirmButton: false,
        timer: 1500,
      });
      setFalsecount((count) => count + 1);
    }
  };
  return (
    <div className="flex">
      <div className="w-9/12">
        {datas.data.questions.map((item) => (
          <Prinquis key={item.id} item={item} handleAns={handleAns}></Prinquis>
        ))}
      </div>
      <div className="w-3/12">
        <div className=" bg-sky-400 py-4 px-1 sticky top-0 rounded-md mt-10 mr-5">
          <h1 className="text-white text-3xl font-bold">Marks</h1>
          <h4 className="text-white text-lg font-medium mt-2">
            Total Quiz: {datas.data.questions.length}
          </h4>
          <h4 className="text-white text-lg font-medium my-2">
            True Ans: {truecount}
          </h4>
          <h4 className="text-white text-lg font-medium ">
            False Ans: {falsecount}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Quis;
