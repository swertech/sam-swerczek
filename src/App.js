import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Products from "./routes/Products";
import Home from "./routes/Home";
import Reports from "./routes/Reports";
import Navbar from "./components/Navbar";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

const App = () => {
  Amplify.configure(awsconfig);

  return <RouterProvider router={router} />
}

export default App;