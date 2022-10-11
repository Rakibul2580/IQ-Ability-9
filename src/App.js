import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Main/Router";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
