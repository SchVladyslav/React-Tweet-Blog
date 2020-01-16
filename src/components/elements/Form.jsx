import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import { Button } from "./Button";
import { Input } from "./Input";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      сonfirmPassword: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        сonfirmPass: ""
      },
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      formValid: false
    };
  }

  handleUserInput(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateFields(name, value);
    });
    console.log(this.state);
  }

  errorClass(error) {
    return error.length === 0 ? "" : "alert-error";
  }

  validateFields(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;

    switch (fieldName) {
      case "firstName":
        firstName = value.length > 0 ? firstName : "";
        fieldValidationErrors.firstName = firstName
          ? ""
          : "Enter your First Name";
      case "lastName":
        lastName = value.length > 0 ? lastName : "";
        fieldValidationErrors.lastName = lastName ? "" : "Enter your Last Name";
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid!";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Password is too short";
        break;
      case "сonfirmPassword":
        confirmPasswordValid = confirmPassword === password ? true : false;
        fieldValidationErrors.confirmPassword = confirmPasswordValid
          ? ""
          : "Passwords are not matching!";
        break;
      default:
        break;
    }
    this.setState(
      {
        firstName: firstName,
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmPasswordValid: confirmPasswordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.confirmPasswordValid
    });
  }

  render() {
    return (
      <form className="main__form" action="">
        <ul className="form__list">
          <li
            className={`form__item ${this.errorClass(
              this.state.formErrors.firstName
            )}`}
          >
            <Input
              className=""
              type={"text"}
              placeholder={"First Name"}
              name={"firstName"}
              value={this.state.firstName}
              handleChange={event => this.handleUserInput(event)}
            />
            <i className="icon icon-user input__icon"></i>
            <FormErrors formErrors={this.state.formErrors.firstName} />
          </li>
          <li
            className={`form__item ${this.errorClass(
              this.state.formErrors.lastName
            )}`}
          >
            <Input
              className=""
              type={"text"}
              placeholder={"Last Name"}
              name={"lastName"}
              value={this.state.lastName}
              handleChange={event => this.handleUserInput(event)}
            />
            <i className="icon icon-user input__icon"></i>
            <FormErrors formErrors={this.state.formErrors.lastName} />
          </li>
          <li
            className={`form__item ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <Input
              className="input__email"
              type={"email"}
              placeholder={"E-mail"}
              name={"email"}
              value={this.state.email}
              handleChange={event => this.handleUserInput(event)}
            />
            <i className="icon icon-user input__icon"></i>
            <FormErrors formErrors={this.state.formErrors.email} />
          </li>
          <li
            className={`form__item ${this.errorClass(
              this.state.formErrors.password
            )}`}
          >
            <Input
              className="input__password"
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              value={this.state.password}
              handleChange={event => this.handleUserInput(event)}
            />
            <i className="icon icon-lock input__icon"></i>
            <FormErrors formErrors={this.state.formErrors.password} />
          </li>
          <li
            className={`form__item ${this.errorClass(
              this.state.formErrors.сonfirmPass
            )}`}
          >
            <Input
              className="input__password"
              type="password"
              placeholder="Confirm Password"
              name="сonfirmPassword"
              value={this.state.confirmPassword}
              handleChange={event => this.handleUserInput(event)}
            />
            {/* <input
              className="input input__password"
              type="password"
              placeholder="Confirm Password"
              name="сonfirmPassword"
              required
              value={this.state.confirmPassword}
              onChange={event => this.handleUserInput(event)}
            /> */}
            <i className="icon icon-lock input__icon"></i>
            <FormErrors formErrors={this.state.formErrors.сonfirmPass} />
          </li>
        </ul>
        <Button
          name="Sign Up"
          className="button"
          type={"submit"}
          buttonState={this.state.formValid}
        />
      </form>
    );
  }
}
