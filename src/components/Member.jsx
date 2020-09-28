import React from "react";
import "../scss/member.scss";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.svg";
import portfolio from "../assets/resume.svg";

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
            {(() => {
              console.log(props.github);
              if (props.github) {
                return (
                  <a
                    href={props.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="" />
                  </a>
                );
              }
            })()}
            {(() => {
              if (props.linkedin) {
                return (
                  <a
                    href={props.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img src={linkedin} alt="" />
                  </a>
                );
              }
            })()}
            {(() => {
              if (props.portfolio) {
                return (
                  <a
                    href={props.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={portfolio} alt="" />
                  </a>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
}
