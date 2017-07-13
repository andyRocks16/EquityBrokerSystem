import React from 'react';
import { userurl, socketurl } from '../appconfig.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends React.Component {

    componentDidMount() {
        this.props.getUsers(userurl);
        this.props.getOrders(socketurl);

    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    {React.cloneElement(this.props.children, this.props)}
                </MuiThemeProvider>
            </div>)
    }
};


export default Main;