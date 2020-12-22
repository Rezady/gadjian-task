import "./App.css";
import NavbarItem from "./components/menu/NavbarItem.jsx";
import SidebarItem from "./components/menu/SidebarItem.jsx";
import MainItem from "./components/main/MainItem.jsx";


function App() {
  return (
    <div className="App d-flex flex-column">
      <NavbarItem />
      <SidebarItem>
        <MainItem />
      </SidebarItem>
    </div>
  ); 
}

export default App;
