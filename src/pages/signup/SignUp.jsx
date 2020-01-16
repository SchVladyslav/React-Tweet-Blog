import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignUp.css";

import Form from "../../components/elements/Form";

export default class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <main className="main-content">
          <div className="main-back">
            <Link to="/">&larr;</Link>
          </div>
          <div className="main-logo">
            <i className="icon icon-mountain"></i>
          </div>
          <h1 className="main__title">Sign Up</h1>
          <Form />
        </main>
      </div>
    );
  }
}
