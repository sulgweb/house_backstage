import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router/index'

export default class Root extends React.Component {
    render() {
        return (
            <Router />
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
