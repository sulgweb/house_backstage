import { Row, Col } from 'antd';
import React from 'react'
import echarts from 'echarts';
import IconCard from "../component/iconCard"


export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
    }
  }

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
      <div id="Home">
        <header className="myheader">
          <Row>
            <Col span={24}>
              <div className="bg-white">
                <div className="title">主页</div>
              </div>
            </Col>
          </Row>
        </header>
        <main>
          <Row gutter={24}>
            <div className="main-content">
              <Col span={6}>
                <div className="bg-white">
                  <IconCard name="当前用户数" number="16515" icon="user-add"></IconCard>
                </div>
              </Col>
              <Col span={6}>
                <div className="bg-white">
                  <IconCard name="当前用户数" number="16515" icon="user-add"></IconCard>
                </div>
              </Col>
              <Col span={6}>
                <div className="bg-white">
                  <IconCard name="当前用户数" number="16515" icon="user-add"></IconCard>
                </div>
              </Col>
              <Col span={6}>
                <div className="bg-white">
                  <IconCard name="当前用户数" number="16515" icon="stock"></IconCard>
                </div>
              </Col>
            </div>
          </Row>
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
        </main>
      </div>
    );
  }
}
