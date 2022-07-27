import request from "@/utils/request";

export const requestHotCity = (params) =>
  request({
    url: "/area/hot",
    params,
  });

export const requestCity = (params) =>
  request({
    url: "/area/city",
    params: params,
  });
