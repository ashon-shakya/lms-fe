import axios from "axios";

const rootURL = import.meta.env.VITE_APP_ROOT_SERVER;
const userEP = rootURL + "users";
const bookEP = rootURL + "books";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcesser = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJwt,
  contentType = "application/json", // Default to JSON content type
}) => {
  const headers = {
    Authorization: isPrivate
      ? isRefreshJwt
        ? getRefreshJWT()
        : getAccessJWT()
      : null,
    "Content-Type": contentType, // Add the content type here
  };
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    const message = error?.response?.data?.message ?? error.message;

    if (message === "jwt expired") {
      // now user refreshJWT to request new accessJWT
      const token = await renewAccessJWT();
      // re call back same api processer
      if (token) {
        return apiProcesser({ method, url, data, isPrivate });
      }

      //clear the tokens
      localStorage.removeItem("refreshJWT");
      sessionStorage.removeItem("accessJWT");
    }
    return {
      status: "error",
      message,
    };
  }
};

export const renewAccessJWT = async () => {
  const { accessJWT } = await apiProcesser({
    method: "get",
    url: userEP + "/refresh-accessjwt",
    isPrivate: true,
    isRefreshJwt: true,
  });

  sessionStorage.setItem("accessJWT", accessJWT);

  return accessJWT;
};
