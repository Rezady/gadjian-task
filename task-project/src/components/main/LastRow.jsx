import "./last-row.css";
import React, { useContext } from "react";
import { StateContext } from "../../App";

// mendefinisikan row paling bawah pada main section
function LastRow() {
  const stateContext = useContext(StateContext);
  return (
    <div className="last-row row  ">
      {/* mendefinisikan tombol previous dan next page */}
      <div className="col-lg-4 col-md-8 col-sm-8 col-xs-8 mx-auto h-25 pt-3">
        <a
          className={
            stateContext.state.count === 0
              ? "fa fa-angle-left my-auto text-muted text-decoration-none"
              : "fa fa-angle-left my-auto text-dark text-decoration-none"
          }
          style={{ fontSize: "30px" }}
          onClick={
            stateContext.state.count === 0
              ? null
              : () => stateContext.dispatch({ type: "decrementCount" })
          }
        ></a>

        <a
          className={
            stateContext.state.count === 0
              ? "ml-2 mr-3 h-100 align-top text-muted text-decoration-none"
              : "ml-2 mr-3 h-100 align-top text-dark text-decoration-none"
          }
          onClick={
            stateContext.state.count === 0
              ? null
              : () => stateContext.dispatch({ type: "decrementCount" })
          }
        >
          Previous Page
        </a>

        <a
          className={
            stateContext.state.count === 24
              ? "ml-3 mr-2 h-100 align-top text-muted text-decoration-none"
              : "ml-3 mr-2 h-100 align-top text-dark text-decoration-none"
          }
          onClick={
            stateContext.state.count === 24
              ? null
              : () => stateContext.dispatch({ type: "incrementCount" })
          }
        >
          Next Page
        </a>

        <a
          className={
            stateContext.state.count === 24
              ? "fa fa-angle-right my-auto text-muted text-decoration-none"
              : "fa fa-angle-right my-auto text-dark text-decoration-none"
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
