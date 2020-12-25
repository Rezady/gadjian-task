import "./last-row.css";
import React, { useContext } from "react";
import { StateContext } from "../../App";

function LastRow() {
  const stateContext = useContext(StateContext);
  return (
    <div className="last-row row bg-warning ">
      <div className="col-4 mx-auto h-25 pt-0">
        <a
          // href="#"
          className={
            stateContext.state.count === 0
              ? "fa fa-angle-left my-auto text-muted"
              : "fa fa-angle-left my-auto text-dark"
          }
          style={{ fontSize: "30px" }}
          onClick={
            stateContext.state.count === 0
              ? null
              : () => stateContext.dispatch({ type: "decrementCount" })
          }
        ></a>

        <a
          // href="#"
          className={
            stateContext.state.count === 0
              ? "ml-3 mr-2 h-100 align-top text-muted"
              : "ml-3 mr-2 h-100 align-top text-dark"
          }
        >
          Previous Page
        </a>

        <a
          // href="#"
          className={
            stateContext.state.count === 24
              ? "ml-3 mr-2 h-100 align-top text-muted"
              : "ml-3 mr-2 h-100 align-top text-dark"
          }
        >
          Next Page
        </a>

        <a
          // href="#"
          className={
            stateContext.state.count === 24
              ? "fa fa-angle-right my-auto text-muted"
              : "fa fa-angle-right my-auto text-dark"
          }
          style={{ fontSize: "30px" }}
          onClick={
            stateContext.state.count === 24
              ? null
              : () => stateContext.dispatch({ type: "incrementCount" })
          }
        ></a>
        {console.log("lastrow state", stateContext.state)}
      </div>
    </div>
  );
}

export default LastRow;
