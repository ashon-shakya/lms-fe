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
import { setBooks } from "./features/books/bookSlice";
import { fetchBooks } from "./features/books/bookAxios";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import BookLanding from "./pages/book/BookLanding";
import { autoLogin } from "./features/user/userAction";
import Dashboard from "./pages/dashboard/Dashboard";
import BookList from "./pages/book/BookList";
import AddNewBook from "./pages/book/AddNewBook";
import EditBook from "./pages/book/EditBook";
import MyBorrow from "./pages/borrow/MyBorrow";
import Reviews from "./pages/reviews/Reviews";
import { getReviews } from "./features/reviews/reviewAction";
import VerifyUser from "./pages/signin-singup/VerifyUser";

function App() {
  const dispatch = useDispatch();

  // const fillBookData = async () => {
  //   const data = await fetchBooks(false);

  //   console.log(data);
  //   dispatch(setBooks(data.books));
  // };

  useEffect(() => {
    // axios call
    dispatch(getAllBooksAction());
    dispatch(autoLogin());
    dispatch(getReviews());
    // dispatch(getAllBooksAction());
  }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="*" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="book/:_id" element={<BookLanding />} />
          <Route path="verify/:_token" element={<VerifyUser />} />
        </Route>
        {/* Private Routes */}

        {/* Only Admin */}
        {/* Display Book List */}
        <Route path="admin/books" element={<BookList />} />
        <Route path="admin/books/new" element={<AddNewBook />} />
        <Route path="admin/book/edit/:_id" element={<EditBook />} />

        <Route path="admin/reviews" element={<Reviews />} />

        {/* Both admin and users */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-books" element={<MyBorrow />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
