import React, { useState } from "react";

function BodyCard(props) {
  return (
    <div className={props.cardClass[props.idx]}>
      <div className="row bg-white border-bottom header-card px-2 py-1">
        <span className="text-header text-muted">
          Personel ID :
          <span className="text-success">
            {
              props.stateContext.arr[props.idx + props.stateContext.count].id
                .value
            }
          </span>
        </span>
      </div>
      <div className="row bg-white photo-card">
        <img
          src={
            props.stateContext.arr[props.idx + props.stateContext.count].picture
              .large
          }
          alt="..."
          className="pict rounded-circle mx-auto my-auto"
        />
      </div>
      <div className="row bg-white identity-card py-2 px-2">
        <div className="d-block pl-0 text-left my-auto">
          <p class="mb-0">Name</p>
          <p class="text-muted mb-1">
            {
              props.stateContext.arr[props.idx + props.stateContext.count].name
                .first
            }
          </p>
          <p class="mb-0">Telephone</p>
          <p class="text-muted mb-1">
            {props.stateContext.arr[props.idx + props.stateContext.count].phone}
          </p>
          <p class="mb-0">birthday</p>
          <p class="text-muted mb-1">{props.getBirthday}</p>
          <p class="mb-0">Email</p>
          <p class="text-muted mb-1">
            {props.stateContext.arr[props.idx + props.stateContext.count].email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyCard;
