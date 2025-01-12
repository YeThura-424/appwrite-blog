// import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import AllPost from "../pages/AllPost.jsx";
import AuthLayout from "../components/AuthLayout.jsx";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout auth={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout auth={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-post",
        element: (
          <AuthLayout auth>
            <AllPost />
          </AuthLayout>
        ),
      },
    ],
  },
]);
