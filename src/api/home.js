import request from "@/utils/request";

export const requestSongList = (params) => {
  return request({
    url: "/personalized",
    params,
  });
};

export const requestNewSongList = (params) =>
  request({
    url: "/personalized/newsong",
    params,
  });
