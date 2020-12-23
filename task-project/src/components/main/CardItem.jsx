import "./card-item.css";
import pict from "./Capture.PNG";
import { useState, useEffect } from "react";

function CardItem() {
  return (
    <div class="row flex-grow-1 my-5">
      <div class="col  mr-3 ">
        <div class="row bg-info header-card px-2 py-1">
          <span class="text-header text-muted">
            Personel ID : <span class="text-success">123456</span>
            {/* <span class="float-right">
              <span class="rounded-circle bg-dark">123</span> 
            </span> */}
          </span>
        </div>
        <div class="row bg-danger photo-card">
          <img
            src={pict}
            alt="..."
            class="pict rounded-circle mx-auto my-auto"
          />
        </div>
        <div class="row bg-light identity-card py-2 px-2">
          <div class="d-block pl-0 text-left my-auto">
            <p>Name</p>
            <p>Rezady</p>
            <p>Telephone</p>
            <p>081235464474</p>
            <p>birthday</p>
            <p>...</p>
            <p>Email</p>
            <p>rezady30@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="col bg-info mx-3">1 of 2</div>
      <div class="col bg-secondary mx-3">1 of 2</div>
      <div class="col bg-danger ml-3">1 of 2</div>
    </div>
  );
}

export default CardItem;
