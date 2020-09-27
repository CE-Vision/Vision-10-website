import React from "react";
import VLogo from "../assets/Vision Logo.svg";

export default function Info() {
  return (
    <>
          <div className="info">
              <ul>
                  <li></li>
                  <li></li>    
              </ul>
        <img src={VLogo} alt="" className="src" />
        <h1>
          Vision is the most awaited techfest for every student in SVIT. This
          year Computer Department presents you VISION 9.0. A legacy of our
          department to provide the best symposium experience since 8 years.
          Vision gives you a platform and opportunities to take part in
          different events and activities.
        </h1>
      </div>
    </>
  );
}
