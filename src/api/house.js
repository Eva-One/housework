import request from "@/utils/request";

export const requestHouseDetailApi = (id) => {
  return request({
    url: `/houses/${id}`,
  });
};

export const requestHouseIsApi = (token, id) => {
  return request({
    url: `/user/favorites/${id}`,
    headers: {
      authorization: token,
    },
  });
};
