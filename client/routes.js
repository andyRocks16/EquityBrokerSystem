import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import configureStore from './store/configureStore';

import App from './components/AppList';
import Main from './components/Main.component';
import Login from './components/Login/Login.component';
import Chart from './components/Trader/Chart.component';
import Trader from './components/Trader/Trader.component';

 const store = configureStore();
export var route=
<Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login} />
                <Route path="/trader" component={Trader}>
                </Route>
            </Route>
        </Router>
    </Provider>
