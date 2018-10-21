import React, { Component } from 'react';
import './index.css';
import {Link} from "react-router-dom";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class SetingNavbar extends Component {
    constructor(){
        super()
        this.state = {
            current: 'main',
          }
     }
     //导航点击事件
     handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

  render() {
    return (
      <div className="Setingnavbar">
                 <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="main">
           <Link to={"/SetingHome/email"}>
              首页
            </Link>
        </Menu.Item>
        <Menu.Item key="user">
           <Link to={"/user"}>
              会员
            </Link>
        </Menu.Item>
        <Menu.Item key="content">
        <Link to={"/content"}>
              内容
            </Link>    
        </Menu.Item>
        <Menu.Item key="haverun">
                运营
        </Menu.Item>
        <Menu.Item key="workbox">
                工具
        </Menu.Item>
        <Menu.Item key="seting">
                系统
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default SetingNavbar;
