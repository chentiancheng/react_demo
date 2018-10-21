import React, { Component } from 'react';
import './index.css';
import SetingNavbar from "../component/seting_navbar"
import Aside from "../component/aside"
class SetingHome extends Component {
  render() {
    return (
      <div className="setingHome">
        <SetingNavbar></SetingNavbar>
        <div>
          <div className="asideLeft">
               <Aside></Aside>
          </div>
          <div className="asideRight"></div>  
        </div>
      </div>
    );
  }
}

export default SetingHome;
