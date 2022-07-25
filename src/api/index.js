import { requestSongList, requestNewSongList } from "@/api/home";
import { getHotKey, searchSong } from "@/api/search";
import { getSongById, getLyricById } from "@/api/play";

export const requestSongListApi = requestSongList;
export const requsetNewSongListApi = requestNewSongList;
export const getHotKeyApi = getHotKey;
export const searchSongApi = searchSong;
export const getSongByIdAPI = getSongById;
export const getLyricByIdAPI = getLyricById;
