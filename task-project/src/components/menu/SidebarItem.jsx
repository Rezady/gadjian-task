import React from "react";
import "./sidebar-item.css";

// mendefinisikan sidebar 
function SidebarItem(props) {
  return (
    <div className="container-fluid mt-0 d-flex flex-grow-1">
      <div className="row mt-0 d-flex flex-grow-1">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse"
        >
          <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active text-left" href="#">
                  <a class="fa fa-home mr-1"></a>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-left" href="#">
                  <a class="fa fa-users mr-1"></a>
                  Personel List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-left" href="#">
                  <a class="fa fa-calendar mr-1" aria-hidden="true"></a>
                  Daily Attendance
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {props.children}
      </div>
    </div>
  );
}

export default SidebarItem;
