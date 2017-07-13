import React from 'react';
import { connect } from 'react-redux';
//all actions which are linked to other components by "team_discussed" series of links
import { getUsers,getOrders,getStocks,deleteOrder } from '../appconfig.js';
import {updateOrder,selectedUser,searchOrder} from '../actions/actions.js';


//Naming convention for all components
import Main from './Main.component';
import Trade from './Trader/Trader.component'

const mapStateToProps = (state) => {
    return {
        //state variables which are access using props
        users: state.users,
        orders: state.orders,
        stocks: state.stocks,
        currentSelectedUser:state.selectedUser,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading,
        searchitems:state.searchitems
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //state function
        getUsers: (url) => dispatch(getUsers(url)),
        loggedInUser: (user)=> dispatch(selectedUser(user)),
        getOrders: (url,data)=> dispatch(getOrders(url,data)),
        getStocks: (url) => dispatch(getStocks(url)),
        updateOrderSocket:(data1,data2)=> dispatch(updateOrder(data1,data2)),
        deleteOrder: (url) => dispatch(deleteOrder(url)),
        searchOrders:(key,search,items)=>dispatch(searchOrder(key,search,items))

    };
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;