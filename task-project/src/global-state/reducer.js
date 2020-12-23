export const initialState = { count: 0, arr: [] };

export function reducer(state, action) {
  switch (action.type) {
    case "setArr":
      return { arr: state.arr.concat(action.value) };
    case "setCount":
      return { count: state.count + 4 };
    default:
      throw new Error();
  }
}
