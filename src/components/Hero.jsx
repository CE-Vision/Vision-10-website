import React from "react";
import Logo from "../assets/Vision Logo.svg";

export default function Hero() {
  return (
    <>
      <div id="hero">
        <div className="container">
          <div id="hero-content">
            <div className="vision">
              <h1>VISION</h1>
              <span id="x">X</span>
            </div>
            <img id="logo" src={Logo} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.008 512.008"
              id="up-arrow"
            >
              <path d="M263.556 3.123c-4.165-4.164-10.917-4.164-15.083 0L45.807 205.79c-21.838 21.838-21.838 57.245 0 79.083s57.245 21.838 79.083 0l77.781-77.781v251.584c0 29.455 23.878 53.333 53.333 53.333s53.333-23.878 53.333-53.333V207.091l77.781 77.781c21.838 21.838 57.245 21.838 79.083 0s21.838-57.245 0-79.083L263.556 3.123z" />
            </svg>
            <h1 id="coming-soon">COMING SOON!</h1>
          </div>
        </div>
      </div>
    </>
  );
}

/*  <header>
          <span id="logo">5 OCT</span>
          <ul>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </header> */
