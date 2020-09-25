import React from "react";
import Member from "./Member";

export default function Team() {
  return (
    <>
      <div id="team">
        <div className="container">
          <h1>Meet the Team</h1>
          <div id="card-wrapper">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
          </div>
        </div>
      </div>
    </>
  );
}
