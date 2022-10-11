import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Quis from "../Quis/Quis";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/items/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quis />,
      },
    ],
  },
]);
