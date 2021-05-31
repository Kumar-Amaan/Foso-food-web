import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import user from '../Forms/MultiInputs'
export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "aman" && password === "aman") {
      localStorage.setItem(
        "token",
        "asijhfiurti"
      );
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div>
        <p className="log">Login</p>
        <div className="container">
        <form className="form" onSubmit={this.submitForm}>
          <h1>FOSO</h1>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <button className="button"><input type="submit" /></button>
        </form>
      </div>
      </div>
    );
  }
}
