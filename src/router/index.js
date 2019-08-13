import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from '../view/Index/Index'

const BasicRoute = () => (
    <Switch>
        {/* 主页 */}
        <Route exact path="/" component={Index}/>
    </Switch>
);
export default BasicRoute;