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
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio, voluptates.
          </p>
        </div>
        <div id="more">More Info</div>
      </div>
    </>
  );
}
