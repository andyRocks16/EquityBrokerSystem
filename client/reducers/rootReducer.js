import { combineReducers } from 'redux';
import { users,orders,stocks,dataHasErrored,selectedUser,dataIsLoading,searchitems } from './reducers';//all reducers to merge into combineReducer

var rootReducer = combineReducers({ 
    users,
    orders,
    stocks,
    dataHasErrored,
    selectedUser,
    dataIsLoading,
    searchitems
});

export default rootReducer;