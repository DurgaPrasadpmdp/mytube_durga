import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SideNavBar from "./Components/SideNavBar";
import VideosPage from "./Components/VideosPage";
import SearchDisplayPage from "./Components/SearchDisplayPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const routerConfig = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideosPage />,
      },
      {
        path: "/watch",
        element: <SideNavBar />,
      },
      {
        path: "/results",
        element: <SearchDisplayPage />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
