// inisialisasi global state
export const initialState = {
  count: 0,
  arr: [],
};

// reducer function
export function reducer(state, action) {
  console.log("session ", sessionStorage.getItem("arr"));
  switch (action.type) {
    case "setArr":
      state = { ...state, arr: action.value };
      return state;
    case "incrementCount":
      state = { ...state, count: state.count + 4 };
      return state;
    case "decrementCount":
      state = { ...state, count: state.count - 4 };
      return state;
    default:
      throw new Error();
  }
}
