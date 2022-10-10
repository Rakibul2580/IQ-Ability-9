import React from "react";
import { useLoaderData } from "react-router-dom";
import Prinquis from "./Prinquis";

const Quis = () => {
  const datas = useLoaderData();
  return (
    <div>
      {datas.data.questions.map((item) => (
        <Prinquis key={item.id} item={item}></Prinquis>
      ))}
    </div>
  );
};

export default Quis;
