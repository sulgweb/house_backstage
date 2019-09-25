import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Router from "./router/index";
import LeftNav from "./view/Common/LeftNav"
import Login from "./view/Common/Login"
import "./common/css/index.scss";
import { Layout, Button } from "antd";

export default class Root extends React.Component {
  logout(){
    sessionStorage.removeItem("currentUser");
    window.location.reload()
  }
  render() {
    let renderHtml=""
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
    if(sessionStorage.getItem("currentUser")){
      renderHtml = <BrowserRouter>
    <LeftNav></LeftNav>
    <Layout style={{ marginLeft: '200px' }}>
      <header style={{background: "#fff",height:"50px",textAlign:"right",paddingRight:"30px",paddingTop:"10px"}}>
        <Button onClick={this.logout.bind(this)}>{currentUser.nickname}/登出</Button>
      </header>
      <main style={{padding:"40px 30px"}}>
        <Router />
      </main>
    </Layout>
  </BrowserRouter>
    }else{
      renderHtml = <Login></Login>
    }
    return (
      <div>{renderHtml}</div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
