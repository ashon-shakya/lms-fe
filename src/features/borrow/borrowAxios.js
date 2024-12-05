import { apiProcesser } from "../../helpers/axiosHelper";

const rootURL = "http://localhost:8000";
const borrowEP = rootURL + "/api/v1/borrow";

export const borrowBook = (obj) => {
  const axiosObj = {
    method: "POST",
    url: borrowEP,
    isPrivate: true,
    data: obj,
  };
  return apiProcesser(axiosObj);
};

export const fetchBorrow = () => {
  const axiosObj = {
    method: "get",
    url: borrowEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const returnBook = (id) => {
  const axiosObj = {
    method: "put",
    url: borrowEP + "/return/" + id,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
