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
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.flag = true;
    },
  }));
  const [cardClass, setCardClass] = useState([
    "col mr-3",
    "col bg-info mx-3",
    "col bg-secondary mx-3",
    "col bg-danger ml-3",
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
    <div className="row flex-grow-1 my-5" ref={inputRef}>
      {console.log("render")}
      {console.log("paginasi ", stateContext.state.count)}
      {console.log("arr ", stateContext.state.arr)}
      {console.log('length ', stateContext.state.arr.length)}
      {props.flag === false || props.valInput === ""
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
                <BodyCard
                  idx={key}
                  stateContext={stateContext.state}
                  cardClass={cardClass}
                  getBirthday={getBirthday(
                    stateContext.state.arr[key + stateContext.state.count]
                      .registered.date
                  )}
                />
              );
            }
          })}
    </div>
  );
});
