import React, { Component } from 'react';
import './index.css';
import SetingNavbar from "../component/seting_navbar"
import { Table, Button, Modal, Form, Icon, Input, Radio } from 'antd';

class User extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      formLayout: 'horizontal',
      name:"",
      age:"",
      index:"",
      data : [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }, {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      }],
    }
  }
  
  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  //模态框
  showModal = (index,state) => {
  
    this.setState({
      visible: true,
      name:state.name,
      age:state.age,
      index:index,
    });
    
  }

  handleOk = (e) => {
    console.log(this.state.index);
    const newData={
      key: this.state.index,
      name: this.state.name,
      age:  this.state.age,
      address: 'Sidney No. 1 Lake Park',
    }
      
    this.setState({
      visible: false,
      
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  //表单
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  changeValue(e){
    const value=e.target.value
		 this.setState(()=>({
				name:value
     }))
    
  }
  changeValue1(e){
    const value=e.target.value
		 this.setState(()=>({
				age:value
		 }))
  }
  render() {
   
    //表单
    const FormItem = Form.Item;
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '年龄',
      dataIndex: 'age',
    }, {
      title: '地址',
      dataIndex: 'address',
    }, {
      title: "操作",
      dataIndex: "key",
      render: (index,state) => {

        return (
          <div>
            <Button type="primary" onClick={this.showModal.bind(this,index,state)}>
              修改
            </Button>
          </div>
        )
      }
    }];

    //表格
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div className="setingHome">
        <SetingNavbar></SetingNavbar>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
        <Modal
          title="修改数据"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >

          <Form layout={formLayout}>

            <FormItem
              label="姓名"
              {...formItemLayout}
            >
              <Input onChange={this.changeValue.bind(this)} value={this.state.name}   />
            </FormItem>
            <FormItem
              label="年龄"
              {...formItemLayout}
            >
              <Input onChange={this.changeValue1.bind(this)}  value={this.state.age} />
            </FormItem>
            {/* <FormItem {...buttonItemLayout}> */}
              {/* <Button type="primary">Submit</Button> */}
            {/* </FormItem> */}
          </Form>
        </Modal>
      </div>
    );
  }
}

export default User;
