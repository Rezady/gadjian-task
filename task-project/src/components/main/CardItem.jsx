import "./card-item.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BodyCard from "./BodyCard";
import { StateContext } from "../../App";

const CardItem = (props) => {
  const stateContext = useContext(StateContext);
  const [cardClass, setCardClass] = useState([
    "col mr-lg-3 mr-md-3 mr-sm-3 mx-xs-auto mb-2",
    "col mx-lg-3 mr-md-3 mr-sm-3 mx-xs-auto mb-2",
    "col mx-lg-3 mr-md-3 mr-sm-3 mx-xs-auto mb-2",
    "col ml-lg-3 mr-md-3 mr-sm-3 mx-xs-auto mb-2",
  ]);

  useEffect(() => {
    console.log("useeffect");
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
    <div className="row d-flex flex-grow-1 my-5">
      {props.valInput === ""
        ? stateContext.state.arr
            .slice(stateContext.state.count, stateContext.state.count + 4)
            .map((data, key) => (
              <BodyCard
                idx={key}
                stateContext={stateContext.state}
                cardClass={cardClass}
                getBirthday={getBirthday(
                  stateContext.state.arr[key + stateContext.state.count]
                    .registered.date
                )}
              />
            ))
        : stateContext.state.arr.map((data, key) => {
            if (props.valInput === data.name.first) {
              return (
                <div className="col-3 mx-auto mb-2">
                  <div className="row bg-white border-bottom header-card px-2 py-1">
                    <span className="text-header text-muted">
                      Personel ID :
                      <span className="text-success">
                        {stateContext.state.arr[key].id.value}
                      </span>
                    </span>
                  </div>
                  <div className="row bg-white photo-card">
                    <img
                      src={stateContext.state.arr[key].picture.large}
                      alt="..."
                      className="pict rounded-circle mx-auto my-auto"
                    />
                  </div>
                  <div className="row bg-white identity-card py-2 px-2">
                    <div className="d-block pl-0 text-left my-auto">
                      <p class="mb-0">Name</p>
                      <span class="text-muted mb-1">
                        {stateContext.state.arr[key].name.first}
                      </span>
                      <p class="mb-0">Telephone</p>
                      <span class="text-muted mb-1">
                        {stateContext.state.arr[key].phone}
                      </span>
                      <p class="mb-0">birthday</p>
                      <span class="text-muted mb-1">{getBirthday}</span>
                      <p class="mb-0">Email</p>
                      <span class="text-muted mb-1">
                        {stateContext.state.arr[key].email}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
    </div>
  );
};

export default CardItem;
