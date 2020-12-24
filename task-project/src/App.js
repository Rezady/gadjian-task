import React, { useReducer } from "react";
import "./App.css";
import NavbarItem from "./components/menu/NavbarItem.jsx";
import SidebarItem from "./components/menu/SidebarItem.jsx";
import MainItem from "./components/main/MainItem.jsx";
import { reducer, initialState } from "./global-state/reducer";
// import useSessionstorage from "@rooks/use-sessionstorage";

export const StateContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [value, set, remove] = useSessionstorage("my-value", 0);
  return (
    <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className="App d-flex flex-column">
        <NavbarItem />
        <SidebarItem>
          <MainItem />
        </SidebarItem>
      </div>
    </StateContext.Provider>
  );
}

export default App;
