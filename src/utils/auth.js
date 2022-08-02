import Stroage from "./Stroage";

const key = "HAOKE_TOKEN";
export const getToken = () => {
  return Stroage.get(key);
};

export const setToken = (payload) => {
  return Stroage.set(key, payload);
};

export const removeToken = () => {
  return Stroage.remove(key);
};
