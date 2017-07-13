import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import config from '../../firebase/config';
import firebase from 'firebase';
import { hashHistory } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            id: '',
            loginStatus: <h3>Please Enter your credentials</h3>
        };

    }

    loginUserLocal() {
        //selecting user
        var userName = this.refs.selectedUser.value;

        var user;
        for (let u of this.props.users) {
            if (this.state.id === u.id) {
                user = u;
            }
        }

        if (user) {
            this.setState({
                loginStatus: <div><h3>Please Wait..Logging in</h3><br /><CircularProgress size={80} thickness={5} /></div>
            })
        } else {
            this.setState({
                loginStatus: <div><h3>Please Enter valid Credentials</h3> <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div></div>
            })
        }

        this.props.loggedInUser(user);


        //firebase lOGIC
        var email = user.id.toLowerCase().concat("@gmail.com");//using id to login not user name
        var password = email;//email is password

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                $('#loginStatus').modal('hide')
                user.updateProfile({
                    displayName: userName,
                });

                hashHistory.push('/trader');
            })
            .catch(() => {
                //error in authentication
                this.setState({
                    loginStatus: <div><h3>Authentication Error...</h3><h3>Please Enter Valid Credentials</h3>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                })
            })
    }

    handleChange(event, index, value) {
        this.setState({ id: value });
    }

    render() {

        var showUserList = this.props.users.map((user, index) => {
            return (
                <MenuItem value={user.id} key={index} primaryText={user.name}></MenuItem>
            )
        })
        //Material styling
        const styles = {
            margin: "10%"
        }
        const style = {
            height: "60%",
            width: "40%",
            width: 'squeeze',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            borderRadius: 10,
            opacity: 0.7,
            marginTop: 90,
        }
        const style1 = {
            marginTop: "10%"
        }
        const style2 = {
            color: "#00bcd4"
        }
        const style3 = {
            fontWeight: "bold"
        }

        return (
            <div className="container-fluid">
                <div>
                    <center>
                        <Paper className="login" style={style} zDepth={10} rounded={true}>
                            <h1><b>LOGIN</b></h1>
                            <br />
                            {/*<SelectField onChange={this.handleChange.bind(this)} selectedMenuItemStyle={style2} menuItemStyle={style3} labelStyle={style3} ref="selectedUser">*/}
                            <SelectField value={this.state.id} floatingLabelText="UserName" floatingLabelStyle={{ marginLeft: '-129px', marginTop: '-10px' }} onChange={this.handleChange.bind(this)} selectedMenuItemStyle={style2} menuItemStyle={style3} labelStyle={style3} ref="selectedUser">
                                {showUserList}
                            </SelectField>
                            <br />
                            <TextField
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password" />
                            <br />
                            <br />
                            <RaisedButton label="Login" primary={true} style={styles} onClick={this.loginUserLocal.bind(this)} data-toggle="modal" data-target="#loginStatus" />

                            <footer style={style1}>
                                <a href="http://publicis.sapient.com/en-us.html" target="_blank"><img src={require('./Capture.PNG')} height="45" width="30" /></a>
                                <p>Powered By <a href="http://publicis.sapient.com/en-us.html" target="_blank">Sapient</a></p>
                            </footer>
                        </Paper>
                    </center>
                </div>
                <div className="modal fade" id="loginStatus" tabindex="-1" role="dialog">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            {this.state.loginStatus}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
