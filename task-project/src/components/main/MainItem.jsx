import "./main-item.css";
import React, { useState } from "react";
import CardItem from "./CardItem";
import LastRow from "./LastRow";
import FirstRow from "./FirstRow";

// kumpulan row main
function MainItem() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <main
      role="main"
      className="col-md-9 col-lg-10  mx-sm-auto px-5 pb-4 pt-4 d-flex flex-column flex-grow-1"
    >
      <FirstRow
        onChange={(val) => {
          setInputSearch(val);
        }}
      />

      <CardItem valInput={inputSearch} />

      <LastRow />
    </main>
  );
}

export default MainItem;
