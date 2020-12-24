import "./main-item.css";
import React, { useRef, useContext, useState } from "react";
import { StateContext } from "../../App";
import { CardItem } from "./CardItem";
import LastRow from "./LastRow";
import FirstRow from "./FirstRow";

function MainItem(props) {
  const inputRef = useRef(null);
  const [flag, setFlag] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const stateContext = useContext(StateContext);
  return (
    <main
      role="main"
      className="col-md-9 ml-sm-auto col-lg-10 px-5 pb-4 pt-4 d-flex flex-column flex-grow-1"
    >
      <FirstRow
        onChange={(val) => {
          setInputSearch(val);
          setFlag(true);
        }}
      />

      <CardItem ref={inputRef} flag={flag} valInput={inputSearch} />

      <LastRow />
    </main>
  );
}

export default MainItem;
