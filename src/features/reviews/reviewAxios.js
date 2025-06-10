import { apiProcesser } from "../../helpers/axiosHelper";

const reviewEP = import.meta.env.VITE_APP_ROOT_SERVER + "/api/v1/reviews";

export const postNewReview = async (obj) => {
  return;
  //TODO
  const axiosObj = {
    method: "post",
    url: reviewEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const updateReview = async (obj) => {
  return;
  //TODO
  const axiosObj = {
    method: "patch",
    url: reviewEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const fetchReviews = async (isPrivate) => {
  return;
  //TODO
  const axiosObj = {
    method: "get",
    url: isPrivate ? reviewEP + "/all" : reviewEP,
    isPrivate,
  };
  return apiProcesser(axiosObj);
};
