import request from "@/utils/request";

export const getSongById = (id) =>
  request({
    url: `/song/detail?ids=${id}`,
  });

export const getLyricById = (id) =>
  request({
    url: `/lyric?id=${id}`,
  });
