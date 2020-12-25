import React, { useState } from "react";

function BodyCard(props) {
  return (
    <div className={props.cardClass[props.idx]}>
      <div className="row bg-info header-card px-2 py-1">
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
      <div className="row bg-danger photo-card">
        <img
          src={
            props.stateContext.arr[props.idx + props.stateContext.count].picture
              .large
          }
          alt="..."
          className="pict rounded-circle mx-auto my-auto"
        />
      </div>
      <div className="row bg-light identity-card py-2 px-2">
        <div className="d-block pl-0 text-left my-auto">
          <p>Name</p>
          <p>
            {
              props.stateContext.arr[props.idx + props.stateContext.count].name
                .first
            }
          </p>
          <p>Telephone</p>
          <p>
            {props.stateContext.arr[props.idx + props.stateContext.count].phone}
          </p>
          <p>birthday</p>
          <p>{props.getBirthday}</p>
          <p>Email</p>
          <p>
            {props.stateContext.arr[props.idx + props.stateContext.count].email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyCard;
