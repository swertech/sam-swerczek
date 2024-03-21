import React, { useState, useEffect } from "react";
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
import Footer from "./components/Footer";

const AppLayout = function() {
  const [isDarkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const localStorageDarkMode = JSON.parse(localStorage.getItem('dark-mode'));
    if (localStorageDarkMode) {
      setDarkMode(true);
    }
  });

  return (<div className={isDarkMode ? "app-layout dark-mode" : "app-layout"}>
    <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    <Outlet />
    <Footer />
  </div>)
};

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
  return <RouterProvider router={router} />
}

export default App;