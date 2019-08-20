import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../view/Home/index';
import UserManage from '../view/UserManage/index'
import ApiManage from "../view/ApiManage/index"

const BasicRoute = () => (
    <Switch>
        {/* 主页 */}
        <Route exact path="/" component={Home}/>
        {/* 用户管理 */}
        <Route exact path="/UserManage" component={UserManage}/>
        {/* api管理 */}
        <Route exact path="/ApiManage" component={ApiManage}/>
    </Switch>
);
export default BasicRoute;