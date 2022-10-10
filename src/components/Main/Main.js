import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

export const ItemsContext = createContext("Data");
const Main = () => {
  const items = useLoaderData();
  return (
    <ItemsContext.Provider value={items.data}>
      <Header />
      <Outlet />
    </ItemsContext.Provider>
  );
};

export default Main;
