import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Router from "./router/index";
import LeftNav from "./view/Common/LeftNav"
import "./common/css/index.css";
import { Layout } from "antd";

export default class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <LeftNav></LeftNav>
        <Layout style={{ marginLeft: 200 }}>
          <Router />
        </Layout>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
