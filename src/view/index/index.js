import { Row, Col } from 'antd';
import React from 'react'
import echarts from 'echarts';


export default class Index extends React.Component{
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount(){
    console.log(this.props)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    // 绘制图表
    myChart.setOption({
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
      <div id="Home">
        <header className="header-white">
          <Row>
            <Col span={24}>
              <div className="title">主页</div>
            </Col>
          </Row>
        </header>
        <main className="main-content">
          <Row gutter={24}>
            <Col span={8}>
              <div id="echart1" style={{ width: 400, height: 400 }}></div>
            </Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}></Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>
        </main>
      </div>
    );
  }
}
