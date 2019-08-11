import React from 'react';
import {Route, Switch ,BrowserRouter} from 'react-router-dom';
import index from '../view/index/index'

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            {/* 主页 */}
            <Route exact path="/" component={index}/>
        </Switch>
    </BrowserRouter>
);
export default BasicRoute;