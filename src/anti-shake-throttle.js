//防抖函数
const antiShake = (functionName, time) => {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      functionName();
    }, time);
  };
};

//节流函数
const throttle = (functionName, time) => {
  let timer;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        functionName();
        timer = null;
      }, time);
    }
  };
};

module.exports = {
  antiShake,
  throttle,
};
