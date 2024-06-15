import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import SignIn from "../Pages/Signin/SignIn";
import SinglePhone from "../Pages/SinglePhone/SinglePhone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:`/phone/:id`,
        element:<SinglePhone></SinglePhone>,
      }
    ],
  },
]);

export default router;
