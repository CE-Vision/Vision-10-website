import React, { Component } from "react";

export default class Header extends Component {
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };
  render() {
    return (
      <header className={!this.state.visible ? "header--hidden" : ""}>
        <div className="container">
          <ul>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Team</a>
            </li>
            <li>
              <button
                id="register"
                onClick={() => {
                  window.location.href("http://registration.cevision.tech/");
                }}
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
