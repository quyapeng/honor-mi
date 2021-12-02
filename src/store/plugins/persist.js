export default store => {
  // 持久化数据
  // store初始化的时候，将存储在localstorage中的状态还原
  if (localStorage) {
    const user = JSON.parse(localStorage.getItem("user"));
  }
};
