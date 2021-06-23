export const add = (h, obj) => {
  return {
    type: "ADD",
    payload: {
      heirarchy: h,
      object: obj,
    },
  };
};

export const del = (h, obj) => {
  return {
    type: "DELETE",
    payload: {
      heirarchy: h,
      object: obj,
    },
  };
};

export const modify = (h, obj) => {
  return {
    type: "MODIFY",
    payload: {
      heirarchy: h,
      object: obj,
    },
  };
};
