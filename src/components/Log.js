import React from "react";
import { Route } from "react-router";
import Admin from "./Auth/Admin";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";

function Log() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default Log;
