import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import Footer from "./components/Footer";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  Amplify.configure(awsconfig);

  return <RouterProvider router={router} />
}

export default App;