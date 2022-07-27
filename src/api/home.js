import request from "@/utils/request";

export const requestSwiper = () =>
  request({
    url: "/home/swiper",
  });

export const requestGroup = (params) =>
  request({
    url: "/home/groups",
    params,
  });
