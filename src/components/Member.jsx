import React from "react";
import "../scss/member.scss";
import github from "../assets/github.png";

export default function Member() {
  return (
    <>
      <div className="member">
        <div className="img"></div>
        <div className="text">
          <h2>John Doe</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="links">
            <img src={github} />
          </div>
        </div>
      </div>
    </>
  );
}
