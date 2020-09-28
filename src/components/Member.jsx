import React from "react";
import "../scss/member.scss";
import github from "../assets/github.png";

export default function Member(props) {
  return (
    <>
      <div
        className="member"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-delay="25"
      >
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="txt">
          <h3>{props.name}</h3>
          <p>{props.post}</p>
          <div className="links">
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
