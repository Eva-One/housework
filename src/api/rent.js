import request from "@/utils/request";

export const requestRentHouseApi = (token) => {
  return request({
    url: "/user/houses",
    headers: {
      authorization: token,
    },
  });
};

/**
 * 获取发布房屋条件
 * @param {*} token 用户token
 * @returns Promise
 */
export const requestRentHouseParamsApi = (token) => {
  return request({
    url: "/houses/params",
    headers: {
      authorization: token,
    },
  });
};

/**
 * 查询小区
 * @param {*} name 关键词
 * @param {*} id 位置id
 * @returns Promise
 */
export const requestSearchHouseApi = (name, id) => {
  return request({
    url: "/area/community",
    params: {
      name,
      id,
    },
  });
};

/**
 * 上传图片
 * @param {*} data 图片
 * @returns Promise
 */
export const requestUploadImgApi = (data) => {
  return request({
    url: "/houses/image",
    method: "POST",
    data,
  });
};

// 发布房源
export const requestPublishHouse = (
  title,
  description,
  houseImg,
  oriented,
  supporting,
  price,
  roomType,
  size,
  floor,
  community
) => {
  return request({
    url: "/user/houses",
    method: "POST",
    data: {
      title,
      description,
      houseImg,
      oriented,
      supporting,
      price,
      roomType,
      size,
      floor,
      community,
    },
  });
};
