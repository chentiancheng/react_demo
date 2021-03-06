import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css';
import {Link} from "react-router-dom";
const FormItem = Form.Item;
class Login extends Component {
      constructor(){
          super()
      }  
      
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="LoginBox">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
           </FormItem>
           <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
          <Link to={"/SetingHome/email"}>
                  登录
          </Link>
          </Button>
           </FormItem>
      </Form>
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
}
}
const Logins = Form.create()(Login);
export default Logins;
