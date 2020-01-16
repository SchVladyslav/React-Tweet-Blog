import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LogIn.css";
import Form from "../../components/elements/Form";

export default class LogIn extends Component {
  render() {
    return (
      <div className="container">
        <main className="main-content">
          <div className="main-logo">
            <i className="icon icon-mountain"></i>
          </div>
          <h1 className="main__title">Log In</h1>

          {/* <Form /> */}
          <form className="main__form" action="">
            <div className="item__validation"></div>
            <ul className="form__list">
              <li className="form__item">
                <input
                  className="input input__email"
                  type="email"
                  placeholder="E-mail"
                  formControlName="email"
                  autocomplete="current-email"
                />
                <i className="icon icon-user input__icon"></i>
              </li>
              <li className="form__item">
                <input
                  className="input input__password"
                  type="password"
                  placeholder="Password"
                  formControlName="password"
                  autocomplete="current-password"
                />
                <i className="icon icon-lock input__icon"></i>
              </li>
            </ul>
            <p className="main__reset">
              <a className="hint">Forgot password?</a>
            </p>

            <button className="button button__login" type="submit">
              Log In
            </button>
          </form>
          <div className="form__controls">
            <p className="main__social-text">Or sign up using</p>
            <Link className="hint" to="/signup">
              Don't have an account?
            </Link>
          </div>
        </main>
      </div>
    );
  }
}
