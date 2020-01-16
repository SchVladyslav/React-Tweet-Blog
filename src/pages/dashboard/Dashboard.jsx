import React, { Component } from "react";
import "./Dashboard.css";

import { Nav } from "./nav/Nav";
import { Suggestions } from "./suggestions/Suggestions";
import { Main } from "./main/Main";

export default class Dashboard extends Component {
  render() {
    return (
      <div class="admin">
        <Nav />
        <Main />
        <Suggestions />
      </div>
    );
  }
}
