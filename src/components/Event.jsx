import React from "react";
import "../scss/event.scss";

export default function Event(props) {
  return (
    <>
      <div className="card">
        <div className="evntImg">
          <img src={props.img} alt="" />
        </div>
        <div className="evntTxt">
          <h2>{props.eventTitle}</h2>
          <p>{props.eventTagline}</p>
        </div>
        <div id="more">More Info ></div>
      </div>
    </>
  );
}
