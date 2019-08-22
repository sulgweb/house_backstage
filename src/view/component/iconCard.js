import { Row, Col, Card, Icon, Statistic } from "antd";
import React from "react";

export default class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  render() {
    return (
      <div id="iconCard">
        <Card style={{border:"none"}}>
          <Row>
            <Col span={8}>
              <Icon
                type={this.props.icon}
                style={{ color: "#3e9bf7", fontSize: "64px" }}
              />
            </Col>
            <Col span={16}>
              <div>{this.props.name}</div>
              <Statistic
                value={this.props.number}
                valueStyle={{ color: "#3e9bf7", fontSize: "36px" }}
              />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
