import { render } from 'react-dom';
import css from './style/common.css';
import {route} from './routes.js' 

import App from './components/AppList';
import Main from './components/Main.component';
import Login from './components/Login/Login.component';
import Chart from './components/Trader/Chart.component';
import Trader from './components/Trader/Trader.component';
import firebase from 'firebase';
import config from './firebase/config';

var injectTapEventPlugin=require("react-tap-event-plugin");
//here sending empty initialstates
injectTapEventPlugin();

 firebase.initializeApp(config);
// console.log("INside app js",fb);

render(
    route,
    document.getElementById('root')
);
