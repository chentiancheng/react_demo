import React, { Component } from 'react';
import { Tabs,Table } from 'antd';
import './index.css';
class Tables extends Component {
  constructor(){
    super()
    
  };
 

  render() {
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: 'Age',
        dataIndex: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
      }];

      const data =[]
    for(let i=0;i<100;i++){
        const obj={
          key: i,
          name: 'Jim Green'+i,
          age: 10+i,
          address: 'London No.'+i+' Lake Park',
        }
        data.push(obj)

    }      
      // rowSelection object indicates the need for row selection
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
      <div className="">
       <Table rowSelection={rowSelection} columns={columns} dataSource={data} />,
      </div>
    );
  };
}

export default Tables;
