import React from "react";
import { Link } from "react-router-dom";
import "../../common/css/index.css";
import { Layout, Menu, Icon} from "antd";
const { Header, Sider } = Layout;

export default class Root extends React.Component {
    constructor(){
        super();
        this.state={
            currentRouter:""
        }
    }
  render() {
    return (
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0
            }}
          >
            <Header
              style={{ color: "#fff", textAlign: "center", fontSize: "24px" }}
            >
              后台管理
            </Header>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="user" />
                  <span className="nav-text">主页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="UserManage">
                  <Icon type="video-camera" />
                  <span className="nav-text">用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="HouseManage">
                  <Icon type="upload" />
                  <span className="nav-text">房源管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="MessageManage">
                  <Icon type="bar-chart" />
                  <span className="nav-text">留言管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="CollectManage">
                  <Icon type="upload" />
                  <span className="nav-text">收藏管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="announcementManage">
                  <Icon type="appstore-o" />
                  <span className="nav-text">群发管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="PermissionManage" />
                <Icon type="team" />
                <span className="nav-text">权限管理</span>
              </Menu.Item>
              <Menu.Item key="apiManage">
                <Link to="apiManage" />
                  <Icon type="team" />
                  <span className="nav-text">Api管理</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="Log" />
                <Icon type="team" />
                <span className="nav-text">个人中心</span>
              </Menu.Item>
              {/* <Menu.Item key="9">
                <Link to="PermissionManage">
                  <Icon type="cloud-o" />
                  <span className="nav-text">公告管理</span>
                </Link>
              </Menu.Item> */}
              <Menu.Item key="10">
                <Link to="Log" />
                <Icon type="team" />
                <span className="nav-text">系统日志</span>
              </Menu.Item>
              
            </Menu>
          </Sider>
        </Layout>
    );
  }
}
