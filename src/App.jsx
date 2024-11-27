import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AiFillChrome } from "react-icons/ai";
import Home from "./pages/home/Home";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/signin-singup/Login";
import Signup from "./pages/signin-singup/Signup";
import { useDispatch } from "react-redux";

// Get dispatch action from book action
import { getAllBooksAction } from "./features/books/bookAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksAction());
  }, [dispatch]);

  return (
    <>
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
