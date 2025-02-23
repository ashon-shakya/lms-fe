import { apiProcesser } from "../../helpers/axiosHelper";

const rootURL = import.meta.env.VITE_APP_ROOT_SERVER;
const userEP = rootURL + "/api/v1/users";

export const postNewUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  return apiProcesser(axiosObj);
};

export const loginUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP + "/login",
    data: obj,
  };

  return apiProcesser(axiosObj);
};

export const fetchUserInfo = () => {
  const axiosObj = {
    method: "get",
    url: userEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

// verify user
export const verifyUser = (token) => {
  const axiosObj = {
    method: "get",
    url: userEP + "/verify?token=" + token,
  };
  return apiProcesser(axiosObj);
};
