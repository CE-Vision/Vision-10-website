import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="loader" style={{ height: "100" }}></div>
        </div>
      </>
    );
  }
}

export default Loader;
