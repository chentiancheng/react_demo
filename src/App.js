import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import "../node_modules/antd/dist/antd.css";
import {antd} from "antd";
import SetingHome from "./page/SetingHome";
import Contents from "./page/content";
import User from "./page/user";
import Login from "./page/Login";
import Email from "./page/email";
import Move from "./page/move";

class App extends Component {
  render() {
    return (
      <div className="SetingNavbar">
      <Router>    
          <div>
              <Route  exact path={"/"} component={Login}  />
              <Route path={"/SetingHome"} component={SetingHome}  />
              <Route path={"/content"} component={Contents}  />
              <Route path={"/user"} component={User}  />
              <Route path={"/SetingHome/email"} component={Email}  />
              <Route path={"/SetingHome/move"} component={Move}  />
          </div>
      </Router>
      </div>
    );
  }
}
export default App;
