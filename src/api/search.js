import request from "@/utils/request";

export const getHotKey = (params) =>
  request({
    url: "/search/hot",
    params,
  });

export const searchSong = (params) =>
  request({
    url: "/cloudsearch",
    params,
  });
