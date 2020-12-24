// import useSessionstorage from "@rooks/use-sessionstorage";

// var sessionValue = useSessionstorage("my-value", []);

// function getSession (val){
//   sessionStorage.setItem("arr", val) ;
//   return sessionStorage.getItem("arr") ;
// }

// function setSession (val){
//   sessionStorage.setItem("arr", val) ;
// }
import axios from "axios";
// const getApi = async () => {
//   try {
//     const res = await axios.get("https://randomuser.me/api/?results=28");
//     const result = await res.data.results;
//     console.log('getAPI ', result)
//     sessionStorage.setItem("arr", JSON.parse(result));
//     console.log('getAPI ', sessionStorage.getItem("arr"))
//   } catch (err) {
//     console.log(err) ;
//   }
// };

// getApi()

export const initialState = {
  count: 0,
  arr: [],
};

export function reducer(state, action) {
  console.log("session ", sessionStorage.getItem("arr"));
  switch (action.type) {
    case "setArr":
      // sessionStorage.setItem("arr", JSON.stringify(action.value));
      state = { ...state, arr: action.value };

      return state;
    case "incrementCount":
      // sessionStorage["count"] = state.count + 4;
      state = { ...state, count: state.count + 4 };
      return state;
    case "decrementCount":
      // sessionStorage["count"] = state.count + 4;
      state = { ...state, count: state.count - 4 };
      return state;
    default:
      throw new Error();
  }
}
