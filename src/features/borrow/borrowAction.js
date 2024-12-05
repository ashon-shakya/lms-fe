import { toast } from "react-toastify";
import { borrowBook, fetchBorrow } from "./borrowAxios";
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
