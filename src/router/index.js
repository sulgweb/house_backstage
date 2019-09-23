import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../view/Home/index';
import UserManage from '../view/UserManage/index';
import ApiManage from "../view/ApiManage/index";
import HouseManage from "../view/HouseManage/index";
import announcementManage from "../view/announcementManage/index"
import Login from "../view/Common/Login"

const BasicRoute = () => (
    <Switch>
        {/* 主页 */}
        <Route exact path="/" component={Home}/>
        {/* 用户登录 */}
        <Route exact path="/Login" component={Login}/>
        {/* 用户管理 */}
        <Route exact path="/UserManage" component={UserManage}/>
        {/* api管理 */}
        <Route exact path="/ApiManage" component={ApiManage}/>
        {/* 房源管理 */}
        <Route exact path="/HouseManage" component={HouseManage}/>
        {/* 群发管理 */}
        <Route exact path="/announcementManage" component={announcementManage}/>
    </Switch>
);
export default BasicRoute;