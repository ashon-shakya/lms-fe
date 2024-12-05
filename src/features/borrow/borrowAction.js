import { toast } from "react-toastify";
import { borrowBook } from "./borrowAxios";
import { getAllBooksAction } from "../books/bookAction";

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
