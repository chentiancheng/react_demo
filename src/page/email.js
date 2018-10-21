import React, { Component } from 'react';
import { Tabs } from 'antd';
import './index.css';
import Echarts from "../component/ecahrts";
import Echarts1 from "../component/echarts1";
import Tables from "../component/Tables";
class Email extends Component {
  constructor(){
    super()
  };
 

  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div className="">
           <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Tab 1" key="1">
          <Echarts></Echarts>
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <Echarts1></Echarts1>
          </TabPane>
          <TabPane tab="Tab 3" key="3">
          <Tables></Tables>
          </TabPane>
           </Tabs>
      </div>
    );
  };
  callback(key) {
    console.log(key);
  }
}

export default Email;
