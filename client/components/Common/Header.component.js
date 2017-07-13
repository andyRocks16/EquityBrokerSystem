import React from 'react';
import { Link } from 'react-router'
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as firebase from 'firebase';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.numberOfOrders = 0;
        this.myIndex= 1000;
        this.state = {
            open: false,
            myCount: 0,
            openDrawer:false,
            open2:false,
            open3:false,
            openDialogue:false
        };
        this.handleRequestClose=this.handleRequestClose.bind(this);
        this.handleTouchTap=this.handleTouchTap.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
}

    openMenu(event){
    // This prevents ghost click.
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      open2: true,
      anchorEl: event.currentTarget,
      
    });

    if(this.state.openDrawer){
        this.setState({openDrawer:false});
    }
  };

    deleteAllOrders(){
        this.myIndex= 1000;
        this.setState({open2:false});
        this.props.deleteOrders();
    }

    refreshMyData(){
        this.setState({open2:false});
        this.props.refreshData();
    }

    handleToggle(ind){
        var w=window.innerWidth;
        if(w<768){
             this.setState({open3:true
    });
        }
        else{
        this.setState({openDialogue:true,
            open:false
    });
        }
        this.myIndex=ind;
    }

    closeDialogue(){
        this.setState({openDialogue:false,
        open3:false});
    }

    createHandler() {
        var TraderTextBox = ReactDOM.findDOMNode(this.refs.orderNumber).value;
        this.numberOfOrders = +(TraderTextBox);
        this.props.createOrder(TraderTextBox);
        this.setState({ myCount: this.state.myCount + +(TraderTextBox) });
        ReactDOM.findDOMNode(this.refs.orderNumber).value = "";
    }

    focus() {
        ReactDOM.findDOMNode(this.refs.orderNumber).autofocus = true;
        this.setState({open2:false});
    }

     handleTouchTap(event) {
    // This prevents ghost click.
    this.setState({myCount:0});
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
      
    });

    if(this.state.openDrawer){
        this.setState({openDrawer:false});
    }
  };

     handleRequestClose() {
    this.setState({
      open: false,
      open2:false,
      open3:false
    });
  };

    render() {
        const styles={
            top: 10, 
            right: 10,
           
        }
        var length = Object.keys(this.props.orders).length;
        var n = length - this.numberOfOrders;
        var menuItem = this.props.orders.map((item, index) => {
            if (index >= n) {
                return ( <MenuItem onClick={this.handleToggle.bind(this,index)}>Trader: <b>{item.traderId}</b>| SYM: <b>{item.symbol}</b> | STATUS: <b>{item.status}</b> <hr/> </MenuItem>
                    );
            }
            else { { } }
        })
        
        if(this.myIndex!=1000){
        var drawerDisplay=<div><MenuItem>ID: {this.props.orders[this.myIndex].id}</MenuItem><hr/>
                        <MenuItem>Creation Time: {this.props.orders[this.myIndex].creationTime}</MenuItem><hr/>
                        <MenuItem>Side: {this.props.orders[this.myIndex].side}</MenuItem><hr/>
                        <MenuItem>Symbol: {this.props.orders[this.myIndex].symbol}</MenuItem><hr/>
                        <MenuItem>Quantity: {this.props.orders[this.myIndex].quantity}</MenuItem><hr/>
                        <MenuItem>Quantity Placed: {this.props.orders[this.myIndex].quantityPlaced}</MenuItem><hr/>
                        <MenuItem>Quantity Executed: {this.props.orders[this.myIndex].quantityExecuted}</MenuItem><hr/>
                        <MenuItem>Limit Price: {this.props.orders[this.myIndex].limitPrice}</MenuItem><hr/>
                        <MenuItem>Priority: {this.props.orders[this.myIndex].priority}</MenuItem><hr/>
                        <MenuItem>Status: {this.props.orders[this.myIndex].status}</MenuItem>
                        </div>
        }  

        const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeDialogue.bind(this)}
            />
        ];                                                                      

        return (
            <div>
                <div>
                    <header className="navbar">
                        <nav>
                            <div className="top">
                                <ul className="drop-menu">
                                    <li className="traderdesktop white">Broker Trading Platform</li>
                                    <li className="pull-right signout">
                                        <a className= "white" href="" onClick={this.props.logoutUser} >Sign Out</a>
                                    </li>
                                    <li className="pull-right tradername"><b>{firebase.auth().currentUser.displayName}</b></li>
                                </ul>
                            </div>
                            <hr>
                            </hr>
                            <div className="bottom">
                             <div className="hidden-sm hidden-md hidden-lg col-xs-4 menu"><center><RaisedButton label="MENU" fullWidth={true} labelColor='white' backgroundColor='#24292E' onTouchTap={this.openMenu.bind(this)}/> </center> </div>
                                <ul className="drop-menu raisedButtonList col-sm-6 hidden-xs">
                                    <li> <RaisedButton label="Trade" primary={false} labelColor='white' backgroundColor='#24292E' data-toggle="modal" data-target="#myModal" onClick={this.focus.bind(this)}/></li>
                                    <li> <RaisedButton label="Delete" primary={false} labelColor='white' backgroundColor='#24292E' onClick={this.deleteAllOrders.bind(this)}/></li>
                                    <li> <RaisedButton label="Refresh" primary={false} labelColor='white' backgroundColor='#24292E' onClick={this.props.refreshData}/></li>
                                    </ul>
                                    <ul className="drop-menu raisedButtonList2 col-sm-6 col-xs-8">
                                    <li className="pull-right "> <button className="icon chart btn btn-sm" id="buttons-right" onClick={this.props.openChart}> <i className="fa fa-bar-chart" aria-hidden="true"></i></button></li>
                                    <li className="pull-right"> <button className="icon button2 btn btn-sm" id="buttons-right" onClick={this.props.openTable} > <i className="fa fa-table" aria-hidden="true"></i></button></li>
                                    <li className="pull-right">
                                        <Badge badgeContent={this.state.myCount} secondary={true} badgeStyle={styles} onTouchTap={this.handleTouchTap.bind(this)}>
                                            <NotificationsIcon />
                                        </Badge>
                                    </li>
                                </ul>
                                <Popover
                open={this.state.open2}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
                animation={PopoverAnimationVertical}>
                 <Menu>
          <MenuItem data-toggle="modal" data-target="#myModal" onClick={this.focus.bind(this)}><center><b>TRADE</b></center></MenuItem>
          <MenuItem onClick={this.deleteAllOrders.bind(this)}><center><b>DELETE</b></center></MenuItem>
          <MenuItem onClick={this.refreshMyData.bind(this)}><center><b>REFRESH</b></center></MenuItem>                      
          </Menu>
        </Popover>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header basecolor ">
                                <h3><b> Create Multiple Trades</b>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </h3>
                            </div>
                            <div className="modal-body">
                                <h4>Enter number of trades</h4>
                                <input className='form-input form-control' type="text" ref="orderNumber" />
                            </div>
                            <br />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default basecolor" onClick={this.createHandler.bind(this)} data-dismiss="modal">Create</button>
                                <button type="button" className="btn btn-default btn pull-right basecolor" data-dismiss="modal" >Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                 <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
                animation={PopoverAnimationVertical}>

          <Menu>
          <MenuItem><center><b>Latest Orders</b></center></MenuItem>
          <hr/>
           {menuItem}
          </Menu>
        </Popover>

         <Popover
                open={this.state.open3}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
                animation={PopoverAnimationVertical}
                >

          <Menu>
              <RaisedButton label="CLOSE" labelColor='white' backgroundColor='#24292E' fullWidth={true} onClick={this.closeDialogue.bind(this)}/>
          {drawerDisplay}
          </Menu>
        </Popover>

        <Dialog
          actions={actions}
          modal={true}
          open={this.state.openDialogue}
          autoScrollBodyContent={true}
        >
        
          <Menu>
              {drawerDisplay}
              </Menu>
        </Dialog>

            </div>

        );
    }

}


