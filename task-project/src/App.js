import React, { useReducer } from "react";
import "./App.css";
import NavbarItem from "./components/menu/NavbarItem.jsx";
import SidebarItem from "./components/menu/SidebarItem.jsx";
import MainItem from "./components/main/MainItem.jsx";
import { reducer, initialState } from "./global-state/reducer";

export const StateContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider
			value={{ state: state, dispatch: dispatch }}
		>
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
