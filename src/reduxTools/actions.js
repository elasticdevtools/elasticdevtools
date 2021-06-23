export function add(h, obj) {
  console.log(h);
  return {
    type: "ADD",
    payload: {
      heirarchy: h,
      object: obj,
    },
  };
}

export function del(h, obj) {
  return {
    type: "DELETE",
    payload: {
      heirarchy: h,
      object: obj,
    },
  };
}

export function mod(h, obj) {
  return {
    type: "MODIFY",
    payload: {
      heirarchy: h,
      object: obj,
    },
  };
}
