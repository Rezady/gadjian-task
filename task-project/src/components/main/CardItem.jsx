import "./card-item.css";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer, initialState } from "../../global-state/reducer";

function CardItem() {
  // const [arr, setArr] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cardClass, setCardClass] = useState([
    "col mr-3",
    "col bg-info mx-3",
    "col bg-secondary mx-3",
    "col bg-danger ml-3",
  ]);
  //   const [nameCard, setNameCard] = useState(arr[0].name.first);
  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=28");
        const result = await res.data.results;
        // setArr(result);
        dispatch({ type: "setArr", value: result });
       
      } catch (err) {
        console.log(err);
      }
    };

    getApi();
  }, []);

  function getBirthday(str) {
    const birth = new Date(str);
    return birth.getDate() + "-" + birth.getMonth();
  }

  return (
    <div className="row flex-grow-1 my-5">
      
      {console.log(state.count)}
      {state.arr.slice(0, 4).map((data, key) => (
        <div className={cardClass[key] + " rounded"}>
          <div className="row bg-info header-card px-2 py-1">
            <span className="text-header text-muted">
              Personel ID :
              <span className="text-success">
                {state.arr[key].id.value}
              </span>
              {/* <span className="float-right">
                <span className="rounded-circle bg-dark">123</span> 
              </span> */}
            </span>
          </div>
          <div className="row bg-danger photo-card">
            <img
              src={state.arr[key].picture.large}
              alt="..."
              className="pict rounded-circle mx-auto my-auto"
            />
          </div>
          <div className="row bg-light identity-card py-2 px-2">
            <div className="d-block pl-0 text-left my-auto">
              <p>Name</p>
              <p>{state.arr[key].name.first}</p>
              <p>Telephone</p>
              <p>{state.arr[key].phone}</p>
              <p>birthday</p>
              <p>{getBirthday(state.arr[key].registered.date)}</p>
              <p>Email</p>
              <p>{state.arr[key].email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardItem;
