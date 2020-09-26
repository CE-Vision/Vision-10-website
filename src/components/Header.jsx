import React, { Component } from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
import { Link, animateScroll as scroll } from "react-scroll";
>>>>>>> origin/Events-Page

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
<<<<<<< HEAD
              <NavLink to="/" exact>
                Event
              </NavLink>
=======
              <Link
                activeClass="active"
                smooth={true}
                duration={250}
                to="events"
              >
                Events
              </Link>
>>>>>>> origin/Events-Page
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
