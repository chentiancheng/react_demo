import React, {Component} from 'react';
import {Table, Button, Modal, Form, Input} from 'antd';

export default class HomeAdd extends Component{
	
	// 初始化
	constructor(){
		super();

		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);

		this.state = {
			info:{},
			data:[],
			visible:false,
			col:[{
				title:'姓名',
				dataIndex:'name',
				width:'20%'
			},{
				title:'年龄',
				dataIndex:'age',
			},{
				title:'性别',
				dataIndex:'sex',
			},{
				title:'操作',
				render:(text, record)=>{
					return (
						<div>
							<Button onClick={this.handleClick.bind(this, record, 'add')}>新增</Button>&nbsp;
							<Button onClick={this.handleClick.bind(this, record, 'edit')}>编辑</Button>&nbsp;	
							<Button onClick={this.handleClick.bind(this, record, 'delete')}>删除</Button>
						</div>
						)
				}
			}],
		}
	}

	// 渲染数据
	render(){
		return (
			
			<div>

				{
					// 表格
				}
				<Table dataSource={this.state.data} columns={this.state.col} />

				{
					// 模态框
				}
				<Modal
		          title="编辑"
		          visible={this.state.visible}
		          onOk={this.handleOk}
		          onCancel={this.handleCancel}
		        >
		            {
		            	// 模态框中的表单
		            }
					<EditForm info={this.state.info} wrappedComponentRef={(form)=>this.form=form}/>

		        </Modal>

			</div>
			
		)
	}

	// 
	componentDidMount(){
		// 假数据   真实情况应该从网络获取
		const data = [{
					key:1,
					name:'张',
					age:'22',
					sex:'男'
				},{
					key:2,
					name:'王',
					age:'21',
					sex:'女'
				}];

		this.setState({
			data:data
		})
		
	}

	// 处理操作事件
	handleClick(record, type, e){
		// console.log(record);
		// console.log(type);

		var i = this.state.data.length;

		switch(type){
			// 增加
			case 'add':
			{
				var temp = this.state.data;

				var lastNode = temp[i-1]

				const p = {
						key: lastNode.key + 1,
						name:'张',
						age:i + 20,
						sex:'男'
					}

				temp.push(p);

				this.setState({
					data:temp
				})
			}
			break;

			// 删除操作
			case 'delete':
				{
				var temp = this.state.data;

				this.setState({
					data:temp.filter(function(item){
						return item.key != record.key;
					})
				})
			}	
			break;
		
			// 编辑
			case 'edit':
			{
				this.setState({
					visible:true,
					info:record
				})
			}
			break;
		}
	}

	// 模态框点击ok
	handleOk(){

		let info = this.form.props.form.getFieldsValue();
		var list = this.state.data;
		var temp = [];

		for (let i = 0; i < list.length; i ++) {
			let item = list[i];

			if (info.key == item.key) {
				temp.push(info);
			}else{
				temp.push(item);
			}
		}

		this.setState({
			visible:false,
			data:temp
		})

		this.form.props.form.resetFields();
	}
	
	// 模态框取消
	handleCancel(){
		this.form.props.form.resetFields();

		this.setState({
			visible:false
		})
	}
}

// 编辑表单

const FormItem = Form.Item;

class EditForm extends Component {

	constructor(){
		super();

		this.state = {

		}
	}

	render(){

		const { getFieldDecorator } = this.props.form;

		return (
			<div>
				
				<Form>
					<FormItem
						label='id'
					>
					{
						getFieldDecorator('key', {
							rules: [
				              { required: true, message: 'Please select your country!' },
				            ],
				            initialValue:this.props.info.key
						})(
							<Input disabled={true}/>
						)
					}
					</FormItem>

					<FormItem
						label='姓名'
					>
					{
						getFieldDecorator('name', {
							rules: [
				              { required: true, message: 'Please select your country!' },
				            ],
				            initialValue:this.props.info.name
						})(
							<Input />
						)
					}
					</FormItem>

					<FormItem
						label='年龄'
					>
					{
						getFieldDecorator('age', {
							rules: [
				              { required: true, message: 'Please select your country!' },
				            ],
				            initialValue:this.props.info.age
						})(
							<Input />
						)
					}
					</FormItem>

					<FormItem
						label='性别'
					>
					{
						getFieldDecorator('sex', {
							rules: [
				              { required: true, message: 'Please select your country!' },
				            ],
				            initialValue:this.props.info.sex
						})(
							<Input />
						)
					}
					</FormItem>

				</Form>
			</div>
		)
	}

}

EditForm = Form.create()(EditForm);