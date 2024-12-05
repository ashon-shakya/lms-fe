import { toast } from "react-toastify";
import { borrowBook } from "./borrowAxios";

//auto login user
export const borrowBookAction = (obj) => async (dispatch) => {
  // 1. burrowAxios
  const pending = borrowBook(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);
};
