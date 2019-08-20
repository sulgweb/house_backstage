import { Row, Col, Table, Divider, Tag } from 'antd';
import React from 'react'
import echarts from 'echarts';
import {ai} from "../../api/ai"


export default class Index extends React.Component{
  constructor(){
    super()
    this.state={
      collapsed: false,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a href="https://ant.design/components/table-cn/">{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a href="https://ant.design/components/table-cn/">Invite {record.name}</a>
              <Divider type="vertical" />
              <a href="https://ant.design/components/table-cn/">Delete</a>
            </span>
          ),
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  async componentDidMount(){
    console.log(this.props)
    //获取ai列表
    let aiList = await ai.list();
    console.log(aiList)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    // 绘制图表
    myChart.setOption({
      color:['#3e9bf7'],
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  render(){
    return(
      <div id="UserManage">
        <header className="myheader">
          <Row>
            <Col span={24}>
              <div className="bg-white">
                <div className="title">用户管理</div>
              </div>
            </Col>
          </Row>
        </header>
        <main>
          <section>
            <Row gutter={16}>
              <Col span={16}>
                <div className="main-content">
                  <div id="echart1" className="bg-white" style={{ width: '100%', height: 400,padding:"10px" }}></div>
                </div>
              </Col>
              <Col span={8}>
                <div className="main-content">
                  <div className="bg-white" style={{ width: '100%', height: 400 }}>111</div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="main-content">
            <div className="bg-white" style={{padding:"0 30px"}}>
              <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}
