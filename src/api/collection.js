import request from "@/utils/request";

export const requestCollectionList = (token) =>
  request({
    url: "/user/favorites",
    headers: {
      authorization: token,
    },
  });
