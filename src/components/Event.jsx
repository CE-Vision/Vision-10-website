import React from "react";
import "../scss/event.scss";

export default function Event(props) {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          props.showModal(props.rounds);
        }}
      >
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="txt">
          <div>
            <h2>{props.eventTitle}</h2>
            <p>{props.eventTagline}</p>
            <div className="tag">{props.type}</div>
          </div>
          {(() => {
            if (props.rounds) {
              return <div id="more">Learn more </div>;
            }
          })()}
        </div>
      </div>
    </>
  );
}
