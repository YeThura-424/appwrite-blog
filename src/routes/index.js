import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
// import Home from "../pages/Home.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    // ],
  },
]);
