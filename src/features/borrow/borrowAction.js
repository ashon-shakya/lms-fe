import { toast } from "react-toastify";
import { borrowBook, fetchBorrow, returnBook } from "./borrowAxios";
import { getAllBooksAction } from "../books/bookAction";
import { setBorrows } from "./borrowSlice";

//auto login user
export const borrowBookAction = (obj) => async (dispatch) => {
  // 1. burrowAxios
  const pending = borrowBook(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    dispatch(getAllBooksAction());
  }
};

export const getMyBorrowListAction = () => async (dispatch) => {
  // 1. fetch borrow list
  const pending = fetchBorrow();

  const { status, message, borrows } = await pending;

  dispatch(setBorrows(borrows));
};

// Action to return book
export const returnBookAction = (id) => async (dispatch) => {
  //1. call returnBook Axios
  const pending = returnBook(id);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    dispatch(getMyBorrowListAction());
    dispatch(getAllBooksAction());
  }
};
