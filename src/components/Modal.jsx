import React from "react";
import "../scss/background.scss";

function Modal(props) {
  return (
    <div className={props.show ? "overlayWrapper open " : "overlayWrapper"}>
      {/* <button className="cross" /> */}{" "}
      <div className="Modal">{props.children} </div>
    </div>
  );
}
