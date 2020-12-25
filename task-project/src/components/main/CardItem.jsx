import "./card-item.css";
import React, {
  useState,
  useEffect,
  useContext,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import axios from "axios";
import useSessionstorage from "@rooks/use-sessionstorage";
import BodyCard from "./BodyCard";
import { StateContext } from "../../App";

export const CardItem = forwardRef((props, ref) => {
  const stateContext = useContext(StateContext);
  const [flag, setFlag] = useState(props.flag);
  const inputRef = useRef();
  // const [valInput, setValInput] = useState(props.valInput);
  // useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     inputRef.current.flag = true;
  //   },
  // }));
  const [cardClass, setCardClass] = useState([
    "col mr-3 mb-2",
    "col mx-3 mb-2",
    "col mx-3 mb-2",
    "col ml-3 mb-2",
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
    <div className="row d-flex flex-grow-1 my-5" ref={inputRef}>
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
                <div className={cardClass[key]}>
                  <div className="row bg-info header-card px-2 py-1">
                    <span className="text-header text-muted">
                      Personel ID :
                      <span className="text-success">
                        {stateContext.state.arr[key].id.value}
                      </span>
                    </span>
                  </div>
                  <div className="row bg-danger photo-card">
                    <img
                      src={stateContext.state.arr[key].picture.large}
                      alt="..."
                      className="pict rounded-circle mx-auto my-auto"
                    />
                  </div>
                  <div className="row bg-light identity-card py-2 px-2">
                    <div className="d-block pl-0 text-left my-auto">
                      <p>Name</p>
                      <p>{stateContext.state.arr[key].name.first}</p>
                      <p>Telephone</p>
                      <p>{stateContext.state.arr[key].phone}</p>
                      <p>birthday</p>
                      <p>{getBirthday}</p>
                      <p>Email</p>
                      <p>{stateContext.state.arr[key].email}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
    </div>
  );
});
