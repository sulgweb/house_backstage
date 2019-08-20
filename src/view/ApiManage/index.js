import { Row, Col, Table, Button } from 'antd';
import React from 'react'
import echarts from 'echarts';
import {ai} from "../../api/ai"
import handleDate from "../../common/js/handleDate"


export default class Index extends React.Component{
  //处理appid类型
  handleApiType(data){
    let type={
      0:"翻译",
      1:"图片识别",
      2:"语音识别"
    }
    return type[data]
  }
  //处理appid转态
  handleApiStatus(data){
    let status={
      0:<span style={{color:'#19be6b'}}>空闲</span>,
      1:<span style={{color:"#ed4014"}}>请求中</span>,
      2:<span style={{color:"#ff9900"}}>待审核</span>
    }
    return status[data]
  }
  //添加appid
  appidAdd(){
    console.log("appidAdd")
  }
  //审核/重置appid
  appidAudit(data){
    console.log("appidAudit",data)
  }
  //删除appid
  appidDelete(data){
    console.log("appidDelete",data)
  }
  constructor(){
    super()
    this.state={
      collapsed: false,
      columns: [
        {
          title: 'appid',
          dataIndex: 'appid',
          key: 'appid',
        },
        {
          title: '类型',
          dataIndex: 'type',
          render: type => (
            <span>
              {this.handleApiType(type)}
            </span>
          ),
        },
        {
          title: '入库时间',
          dataIndex: 'create_time',
          key: 'create_time',
          render: text => <span>{handleDate.fortmatDate(text)}</span>
        },
        {
          title: '请求状态',
          dataIndex: 'status',
          key: 'age',
          //render: text => text?<span style={{color:"#ed4014"}}>请求中</span>:<span style={{color:"#19be6b"}}>空闲</span>
          render: text => (
            <span>
              {this.handleApiStatus(text)}
            </span>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <Button onClick={()=>this.appidAudit(record.appid)} type="primary" style={{marginRight:"20px"}}>审核</Button>
              <Button onClick={()=>this.appidDelete(record.appid)} type="danger">删除</Button>
            </span>
          ),
        }, 
      ],
      data: []
    }
  }

  async componentDidMount(){
    //获取ai列表
    let aiList = await ai.list();
    console.log(aiList)
    for(let i = 0;i<aiList.data.length;i++){
      aiList.data[i].key = i
    }
    this.setState(
      {
        data:aiList.data
      }
    )
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
                <div className="title"><Button type="default" shape="circle" icon="plus" size="large" style={{marginRight:"10px"}} onClick={()=>this.appidAdd()}/>用户管理</div>
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
