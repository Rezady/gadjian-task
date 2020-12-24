import "./last-row.css";
import { useReducer,useContext } from "react";
import { StateContext } from '../../App';
// import { reducer, initialState } from "../../global-state/reducer";
function LastRow() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const stateContext = useContext(StateContext);
  return (
    <div className="last-row row bg-warning ">
      <div className="col-4 mx-auto h-25 pt-0">
        <a
          className="fa fa-angle-left my-auto"
          style={{ fontSize: "30px" }}
        ></a>
        <a className="mr-3 ml-2 h-100 align-top">Previous Page</a>
        <a className="ml-3 mr-2 h-100 align-top">Next Page</a>
        <a
          className="fa fa-angle-right my-auto"
          style={{ fontSize: "30px" }}
           onClick={() => stateContext.dispatch({ type: "setCount" })}
        ></a>
        {console.log('lastrow ', stateContext.state)}
      </div>
    </div>
  );
}

export default LastRow;
