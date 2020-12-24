import React, { useContext, useRef, useImperativeHandle } from "react";
import { StateContext } from "../../App";

const FirstRow = (props) => {
  const stateContext = useContext(StateContext);

  return (
    <div className="first-row row bg-white ">
      <form class="form-inline my-auto ml-auto mr-3">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => props.onChange(e.target.value)}
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default FirstRow;
