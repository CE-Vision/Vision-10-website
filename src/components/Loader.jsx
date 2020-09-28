import React, { Component } from "react";
import dino from "../assets/dino.gif";

class Loader extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="loader">
            <img
              // src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif'
              src={dino}
              alt="Loading..."
            />
          </div>
        </div>
      </>
    );
  }
}

export default Loader;
