import React from "react";
import Member from "./Member";
import team from "../data/team.json";

export default function Team() {
  return (
    <>
      <div id="team">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="50"
        >
          <h1>MEET THE TEAM</h1>
          {team["Department"].map((value, index) => {
            return (
              <Member name={value.name} post={value.post} img={value.photo} />
            );
          })}
          <h2>Web and Graphics</h2>
          <div
            id="card-wrapper"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="50"
          >
            {team["WebNGraphics"].map((value, index) => {
              return (
                <Member name={value.name} post={value.post} img={value.photo} />
              );
            })}
          </div>
          <h2>Tech</h2>
          <div
            id="card-wrapper"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="50"
          >
            {team["Tech"].map((value, index) => {
              return (
                <Member name={value.name} post={value.post} img={value.photo} />
              );
            })}
          </div>
          <h2>Non-Tech</h2>
          <div
            id="card-wrapper"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="50"
          >
            {team["Non-Tech"].map((value, index) => {
              return (
                <Member name={value.name} post={value.post} img={value.photo} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
