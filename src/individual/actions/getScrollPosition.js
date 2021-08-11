export const getScrollPosition = (data) => {
  console.log(data);
  return {
    type: "GET_SCROLL_POSITION",
    payload: data,
  };
};
