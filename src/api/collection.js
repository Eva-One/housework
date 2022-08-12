import request from "@/utils/request";

export const requestCollectionList = (token) =>
  request({
    url: "/user/favorites",
    headers: {
      authorization: token,
    },
  });

export const delCollection = (token, id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: "DELETE",
    headers: {
      authorization: token,
    },
  });
};

export const addCollection = (token, id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: "POST",
    headers: {
      authorization: token,
    },
  });
};
