import "./card-item.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { StateContext } from "../../App";

function CardItem() {
  const stateContext = useContext(StateContext);
  const [cardClass, setCardClass] = useState([
    "col mr-3",
    "col bg-info mx-3",
    "col bg-secondary mx-3",
    "col bg-danger ml-3",
  ]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=28");
        const result = await res.data.results;
        stateContext.dispatch({ type: "setArr", value: result });
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
      {console.log('render')}
      {console.log('paginasi ', stateContext.state.count)}
      {stateContext.state.arr
        .slice(stateContext.state.count, stateContext.state.count + 4)
        .map((data, key) => (
          <div className={cardClass[key] + " rounded"}>
            <div className="row bg-info header-card px-2 py-1">
              <span className="text-header text-muted">
                Personel ID :
                <span className="text-success">
                  {stateContext.state.arr[key+stateContext.state.count].id.value}
                </span>
                {/* <span className="float-right">
                <span className="rounded-circle bg-dark">123</span> 
              </span> */}
              </span>
            </div>
            <div className="row bg-danger photo-card">
              <img
                src={stateContext.state.arr[key+stateContext.state.count].picture.large}
                alt="..."
                className="pict rounded-circle mx-auto my-auto"
              />
            </div>
            <div className="row bg-light identity-card py-2 px-2">
              <div className="d-block pl-0 text-left my-auto">
                <p>Name</p>
                <p>{stateContext.state.arr[key+stateContext.state.count].name.first}</p>
                <p>Telephone</p>
                <p>{stateContext.state.arr[key+stateContext.state.count].phone}</p>
                <p>birthday</p>
                <p>
                  {getBirthday(stateContext.state.arr[key+stateContext.state.count].registered.date)}
                </p>
                <p>Email</p>
                <p>{stateContext.state.arr[key+stateContext.state.count].email}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CardItem;
