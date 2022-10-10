import React, { useContext } from "react";
import { ItemsContext } from "../Main/Main";
import Banner from "./Baner";
import Homecard from "./Homecard";

const Home = () => {
  const items = useContext(ItemsContext);
  return (
    <div>
      <Banner />
      <div className="bg-white mx-5 absolute left-0 right-0 -mt-20 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
          {items.map((item) => (
            <Homecard key={item.id} item={item}></Homecard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
