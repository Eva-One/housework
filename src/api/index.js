import request from "@/utils/request";
import { requestSwiper, requestGroup } from "@/api/home";
import { requestHotCity, requestCity } from "@/api/city";

export const requestSwiperApi = requestSwiper;
export const requestGroupApi = requestGroup;
export const requestHotCityApi = requestHotCity;
export const requestCityApi = requestCity;
export const requestLoginApi = (username, password) => {
  return request({
    url: "/user/login",
    method: "POST",
    data: {
      username,
      password,
    },
  });
};
