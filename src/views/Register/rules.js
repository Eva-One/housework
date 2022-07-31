export const accountRl = [
  { required: true, message: "请输入正确的账号" },
  {
    pattern: /^[a-zA-Z0-9_-]{4,6}$/,
    message: "请输入4到6位账号",
  },
];

export const passwordRl = [
  { required: true, message: "请输入正确的密码" },
  {
    pattern: /^[a-zA-Z0-9_-]{6,12}$/,
    message: "密码格式不正确",
  },
];
