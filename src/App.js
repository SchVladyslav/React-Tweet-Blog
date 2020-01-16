import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import Dashboard from './pages/dashboard/Dashboard';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
