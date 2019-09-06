//房子管理
import { Row, Col } from "antd";
import React from "react";


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  //页面渲染
  render() {
    return (
      <div id="announcementManage">
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
              <div>主体部分</div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Index
