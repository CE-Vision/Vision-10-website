import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

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
              <Link
                activeClass="active"
                smooth={true}
                duration={250}
                to="events"
              >
                <NavLink to="/" exact>
                  Events
                </NavLink>
              </Link>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <button
                id="register"
                onClick={() => {
                  window.location.href = "http://registration.cevision.tech/";
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
