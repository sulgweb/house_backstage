import { Row, Col, Table, Button, Modal, Form, Input, Icon, Select, message } from "antd";
import React from "react";
import echarts from "echarts";
import { ai } from "../../api/ai";
import handleDate from "../../common/js/handleDate";
import IconCard from "../component/iconCard";
const { Option } = Select;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      columns: [
        {
          title: "appid",
          dataIndex: "appid",
          key: "appid"
        },
        {
          title: "类型",
          dataIndex: "type",
          render: type => <span>{this.handleApiType(type)}</span>
        },
        {
          title: "入库时间",
          dataIndex: "create_time",
          key: "create_time",
          render: text => <span>{handleDate.fortmatDate(text)}</span>
        },
        {
          title: "请求状态",
          dataIndex: "status",
          key: "age",
          //render: text => text?<span style={{color:"#ed4014"}}>请求中</span>:<span style={{color:"#19be6b"}}>空闲</span>
          render: text => <span>{this.handleApiStatus(text)}</span>
        },
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <span>
              <Button
                onClick={() => this.appidAudit(record.appid)}
                type="primary"
                style={{ marginRight: "20px" }}
              >
                审核
              </Button>
              <Button
                onClick={() => this.appidDelete(record.appid)}
                type="danger"
              >
                删除
              </Button>
            </span>
          )
        }
      ],
      data: [],
      visible: false
    };
  }

  //数据初始化
  async _initData(){
    //获取ai列表
    let aiList = await ai.list();
    let apiTypeCount=[ 0, 0, 0 ]
    for(let i = 0;i < aiList.length;i++){
      apiTypeCount[aiList[i].type]++
    }
    //获取ai请求统计列表
    let aiCountList = await ai.getCountList();
    console.log(aiList, aiCountList);
    for (let i = 0; i < aiList.length; i++) {
      aiList[i].key = i;
    }
    //初始化图表数据
    let dateList = [];
    let countList = [];
    for (let i = 0; i < aiCountList.length; i++) {
      dateList.push(handleDate.fortmatMounth(aiCountList[i].date * 1000));
      countList.push(aiCountList[i].count);
    }
    this.setState({
      data: aiList,
      dateList: dateList,
      countList: countList,
      apiTypeCount: apiTypeCount,
      translateCount: apiTypeCount[0],
      imageCount: apiTypeCount[1],
      audioCount: apiTypeCount[2]
    });
    console.log(this.state)
    console.log(this.state.apiTypeCount["0"])
  }
  //初始化图表
  _initChart(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart1"));
    // 绘制图表
    myChart.setOption({
      color: ["#3e9bf7"],
      title: {
        text: "近一年api请求统计"
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: this.state.dateList
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "api请求",
          type: "line",
          stack: "总量",
          data: this.state.countList
        }
      ]
    });
  }
  //处理appid类型
  handleApiType(data) {
    let type = {
      0: "翻译",
      1: "图片识别",
      2: "语音识别"
    };
    return type[data];
  } 
  //处理appid转态
  handleApiStatus(data) {
    let status = {
      0: <span style={{ color: "#19be6b" }}>空闲</span>,
      1: <span style={{ color: "#ed4014" }}>请求中</span>,
      2: <span style={{ color: "#ff9900" }}>待审核</span>
    };
    return status[data];
  }
  //添加appid
  async appidAdd() {
    let addAppid=await this.props.form.validateFields()
    let res = await ai.addAppid(addAppid);
    console.log(res)
    if(res.affectedRows){
      this._initData()
      this.handleCancel()
      message.success("添加成功！")
    }else{
      this.handleCancel()
      message.error("添加失败")
    }
  }
  //审核/重置appid
  async appidAudit(data) {
    let res = await ai.setStatus({ appid: data, status: 0 });
    console.log(res)
    if(res.data.affectedRows){
      this._initData()
      message.success("状态已变为空闲！")
    }else{
      message.error("失败！")
    }
    console.log(res);
  }
  //删除appid
  async appidDelete(data) {
    console.log("appidDelete", data);
    if(data==="20180907000204223"){
      message.error("抱歉该api不能删除")
    }else{
      let res = await ai.deleteAppid(data);
      console.log(res)
      if(res.data==="删除成功"){
        this._initData()
        message.success("删除成功！")
      }else{
        message.error("失败！")
      }
    }
  }
  //显示新增模态框
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  //关闭模态框
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  
  
  async componentDidMount() {
    await this._initData()
    await this._initChart()
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="UserManage">
        <header className="myheader">
          <Row>
            <Col span={24}>
              <div className="bg-white">
                <div className="title">
                  <Button
                    type="default"
                    shape="circle"
                    icon="plus"
                    size="large"
                    style={{ marginRight: "10px" }}
                    onClick={() => this.showModal()}
                  />
                  用户管理
                </div>
              </div>
            </Col>
          </Row>
        </header>
        <main>
          <section>
            <Row gutter={16}>
              <Col span={16}>
                <div className="main-content">
                  <div
                    id="echart1"
                    className="bg-white"
                    style={{ width: "100%", height: 400, padding: "20px 30px" }}
                  />
                </div>
              </Col>
              <Col span={8}>
                <div className="main-content">
                  <div
                    className="bg-white"
                    style={{ width: "100%", height: 400 }}
                  >
                    <div style={{ maxWidth: "480px" }} >
                      <IconCard
                        name="翻译QPS"
                        number={this.state.translateCount}
                        icon="stock"
                      />
                    </div>
                    <div style={{ maxWidth: "480px" }} >
                      <IconCard
                        name="图片识别QPS"
                        number={this.state.imageCount}
                        icon="stock"
                      />
                    </div>
                    <div style={{ maxWidth: "480px" }} >
                      <IconCard
                        name="语音识别QPS"
                        number={this.state.audioCount}
                        icon="stock"
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="main-content">
            <div className="bg-white" style={{ padding: "0 30px" }}>
              <Table
                columns={this.state.columns}
                dataSource={this.state.data}
              />
            </div>
          </section>
        </main>
        <Modal
          title="新增appid"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={this.appidAdd.bind(this)}>
              确定
            </Button>,
          ]}
        >
          <div id="addAppid">
            <Form>
              <Form.Item>
                {getFieldDecorator("appid")(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="appid"/>)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("key")(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="密钥"/>)}
              </Form.Item>
              <Form.Item>
                <span>选择appid类型</span>
                {getFieldDecorator("type",{initialValue:"1"})(
                  <Select style={{ width: 120, marginLeft: 10 }}>
                    <Option value="0">翻译</Option>
                    <Option value="1">图片识别</Option>
                    <Option value="2">语音识别</Option>
                  </Select>
                )}
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Form.create({ name: 'addAppid' })(Index);
