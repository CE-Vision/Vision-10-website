import React from "react";
import "../scss/member.scss";
import github from "../assets/github.png";

export default function Member(props) {
  return (
    <>
      <div className="member">
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="txt">
          <h2>{props.name}</h2>
          <p>{props.post}</p>
          <div className="links">
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
