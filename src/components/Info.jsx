import React from "react";
import logo from "../assets/vision-logo.svg";

export default function Info() {
  return (
    <div
      className="info"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay="50"
    >
      <div className="container">
        <img src={logo} alt="" className="src" />
        <p>
          Vision is the most awaited techfest for every student in SVIT. This
          year Computer Department presents you VISION 10, a legacy of our
          department to provide the best symposium experience since 9 years.
          Vision gives you a platform and opportunities to take part in
          different events and activities.
        </p>
      </div>
    </div>
  );
}
