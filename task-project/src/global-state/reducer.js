export const initialState = { count: 0, arr: [] };

export function reducer(state, action) {
  switch (action.type) {
    case "setArr":
      state={ ...state, arr: state.arr.concat(action.value) }
      return state;
    case "setCount":
      state = { ...state, count: state.count + 4 }
      return state;
    default:
      throw new Error();
  }
}

// export function init(initialCount) {
//   return { count: 0, arr: [] };
// }
// export function reducer(state, action) {
//   switch (action.type) {
//     case "setArr":
//       return { arr: state.arr.concat(action.value) };
//     case "setCount":
//       return { count: state.count + 4 };
//     case "reset":
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }
