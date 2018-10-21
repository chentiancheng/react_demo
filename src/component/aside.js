import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from "react-router-dom";
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
  



class Aside extends Component {
    constructor(){
        super()
        this.state = {
            current: 'mailseting',
          }
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

  render() {
    return (
      <div className="">
                <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="vertical"
                theme="dark"
            >
                <Menu.Item key="mailseting">
                <Link to="/SetingHome/email">
                <Icon type="mail" />邮箱设置
                </Link>
                </Menu.Item>
                <Menu.Item key="moveseting">
                <Link to="/SetingHome/move">
                <Icon type="mail" />电影设置
                </Link>
                </Menu.Item>
                <Menu.Item key="userseting">
                <Icon type="user" />用户设置
                </Menu.Item>
                <Menu.Item key="bookseting">
                <Icon type="book" />书籍设置
                </Menu.Item>
                <Menu.Item key="pageseting">
                <Icon type="book" />页面设置
                </Menu.Item>
                <Menu.Item key="wayseting">
                <Icon type="book" />导航设置
                </Menu.Item>
                <Menu.Item key="payseting">
                <Icon type="book" />支付设置
                </Menu.Item>
                <Menu.Item key="SEOseting">
                <Icon type="book" />SEO设置
                </Menu.Item>
                <Menu.Item key="fenseting">
                <Icon type="book" />积分设置
                </Menu.Item>
                <Menu.Item key="insertseting">
                <Icon type="book" />注册设置
                </Menu.Item>
                <Menu.Item key="map">
                <Icon type="book" />网站地图
                </Menu.Item>
                <Menu.Item key="playlist">
                <Icon type="book" />计划任务
                </Menu.Item>
                <Menu.Item key="keyseting">
                <Icon type="book" />关键字管理
                </Menu.Item>
                <Menu.Item key="helpseting">
                <Icon type="book" />预警设置
                </Menu.Item>
            </Menu>    
      </div>
    );
  }
}

export default Aside;
