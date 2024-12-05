import { apiProcesser } from "../../helpers/axiosHelper";

const rootURL = "http://localhost:8000";
const borrowEP = rootURL + "/api/v1/borrow";

export const borrowBook = (obj) => {
  console.log(obj);
  const axiosObj = {
    method: "POST",
    url: borrowEP,
    isPrivate: true,
    data: obj,
  };
  return apiProcesser(axiosObj);
};
