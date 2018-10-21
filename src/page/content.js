import React, { Component } from 'react';
import './index.css';
import SetingNavbar from "../component/seting_navbar"
import HomeAdd from "./HomeAdd"
class Contents extends Component {
  render() {
    return (
      <div className="setingHome">
        <SetingNavbar></SetingNavbar>
        <HomeAdd></HomeAdd>
      </div>
    );
  }
}

export default Contents;
