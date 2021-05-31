import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
        <div className="card">
        {/* <h1>Welcome to FOSO</h1> */}
        <h1>You are LoggedIn</h1>
        <p>
            <ul>
                <li><Link to="/accont" >
                    Go To Account
                </Link></li>
            </ul>
        </p>
        <Link to="/logout">Logout</Link>
      </div>
    );
  }
}
