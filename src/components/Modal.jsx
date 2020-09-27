import React from "react";
import "../scss/background.scss";

export default function Modal(props) {
  return (
    <div className={props.show ? "overlayWrapper open " : "overlayWrapper"}>
      {/* // <div className={props.show ? "overlayWrapperOpen " : "overlayWrapper"}> */}
      {/* <button className="cross" /> */}{" "}
      <div className="Modal">
        {props.rounds.map((value, index) => {
          console.log(value.name);
          console.log(props.show);
          return (
            <div>
              <h1>Rounds</h1>
              <h2>{value.name}</h2>
              <h4>{value.tagline}</h4>
              <p>{value.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
