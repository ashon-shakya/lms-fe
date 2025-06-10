import { apiProcesser } from "../../helpers/axiosHelper";

const rootURL = import.meta.env.VITE_APP_ROOT_SERVER;
const borrowEP = rootURL + "/api/v1/borrow";

export const borrowBook = (obj) => {
  return;
  //TODO
  const axiosObj = {
    method: "POST",
    url: borrowEP,
    isPrivate: true,
    data: obj,
  };
  return apiProcesser(axiosObj);
};

export const fetchBorrow = () => {
  return;
  //TODO
  const axiosObj = {
    method: "get",
    url: borrowEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const returnBook = (id) => {
  return;
  //TODO
  const axiosObj = {
    method: "put",
    url: borrowEP + "/return/" + id,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
