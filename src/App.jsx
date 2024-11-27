import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AiFillChrome } from "react-icons/ai";
import Home from "./pages/home/Home";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/signin-singup/Login";
import Signup from "./pages/signin-singup/Signup";

function App() {
  const [count, setCount] = useState(0);

  const routeArray = [
    {
      element: <Home />,
      path: "/",
      index: true,
    },
  ];

  return (
    <>
      <div className="fs-1">
        <h1>Library Management System</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
