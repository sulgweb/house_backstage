//房子管理
import { Row, Col, Table, Form, Pagination } from "antd";
import React from "react";
import { ai } from "../../api/ai";
import { house } from "../../api/house";
import handleDate from "../../common/js/handleDate";

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
          key: "status",
          //render: text => text?<span style={{color:"#ed4014"}}>请求中</span>:<span style={{color:"#19be6b"}}>空闲</span>
          render: text => <span>{this.handleApiStatus(text)}</span>
        },
      ],
      data: [],
      visible: false
    };
  }
  //数据初始化
  async _initData(page=1,size=3){
    //获取ai列表
    let aiListRes = await ai.list({page,size});
    let aiList = aiListRes.list;
    //设置state，只有在state里面的数据才会动态更新
    this.setState({
      aiListRes: aiListRes,
      data: aiList,
    });
    console.log(this.state)
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
  //切换分页
  changPage = page => {
    this._initData(page)
  }
  //获取房源信息
  async getHouseList(data){
    let res = await house.list(data)
    return res.data
  }
  // async/await 用同步的方式写异步，es8的语法
  async componentDidMount() {
    //api管理的数据初始化
    await this._initData(1,3)
    let data = {
        page:1,//当前页
        num:10,//每页的数量
        key:""//模糊搜索关键词
    }
    //获取房子列表
    let res = await this.getHouseList(data)
    console.log("获取房源信息",res)
  }
  //页面渲染
  render() {
    const { aiListRes } = this.state;
    //apiPagination是分页组件，会在return中渲染出来
    //三元表达式
    let apiPagination = aiListRes?
        <Pagination 
          showQuickJumper 
          defaultCurrent={this.state.aiListRes.page} 
          defaultPageSize={this.state.aiListRes.size}	 
          total={this.state.aiListRes.count} 
          onChange={this.changPage}
        />:"";
    return (
      <div id="UserManage">
        <header className="myheader">
          <Row>
            <Col span={24}>
              <div className="bg-white">
                <div className="title">
                    房源管理
                </div>
              </div>
            </Col>
          </Row>
        </header>
        <main>
          <section className="main-content">
            <div className="bg-white" style={{ padding: "0 30px" }}>
              <Table
                columns={this.state.columns}
                dataSource={this.state.data}
                pagination={false}
              />
              <div style={{padding:"20px 0"}} align="right">
                {apiPagination}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Form.create({ name: 'addAppid' })(Index);
