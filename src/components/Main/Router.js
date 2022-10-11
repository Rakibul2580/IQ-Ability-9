import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Home/Home";
import Quis from "../Quis/Quis";
import Statistics from "../Statistics/Statistics";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/items/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quis />,
      },
    ],
  },
]);
