import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
// import Main from '../components/Main.component';
import * as actions from '../actions/actions.js';
import expect from 'expect';
import { users,orders,stocks,dataHasErrored,selectedUser,dataIsLoading,searchitems } from '../reducers/reducers';
import { user } from '../components/Login/Login.component';
// import { searchOrder } from '../actions/actions.js';
// import { key } from '../components/Trader/Table.component';
// import {search} from '../reducers/reducers';
// import {item} from '../reducers/reducers';


//   describe('Login',()=>{  	var result, login; 	it('renders the spec',()=>{
// 		expect(login).toHaveBeenCalled(); 		var component =
// ReactTestUtils.renderIntoDocument(    <MyComponent /> );  var h1 =
// TestUtils.findRenderedDOMComponentWithTag(        component, 'h1'     );
// expect(h1.getDOMNode().textContent)         .toEqual("LOGIN"); }); 	});
// describe('Login', ()=>{ 	it('can render without error',()=>{ 		var component,
// element; 		element= React.createElement(Login,{}); 	expect(function(){
// 	compoenent = ReactTestUtils.renderIntoDocument(element); 	}).not.toThrow();
// }); })


describe('actions', () => {
    //console.log(Login);
    var value = true;
    it('render', () => {
        const expectedActions = {
            type: 'DATA_HAS_ERRORED',
            hasErrored: value
        };
        expect(actions.dataHasErrored(value)).toEqual(expectedActions);

    })

    it('render', () => {
        const expectedActions = {
            type: 'DATA_IS_LOADING',
            isLoading: value
        };
        expect(actions.dataIsLoading(value)).toEqual(expectedActions);

    })

    it('render', () => {
        const expectedActions = {
            type: 'USERS_FETCH_DATA_SUCCESS',
            users
        };
        expect(actions.usersFetchDataSuccess(users)).toEqual(expectedActions);

    })

    it('render', () => {
        const expectedActions = {
            type: 'SELECTED_USER',
            user
        };
        expect(actions.dispatchToDisplay(user)).toEqual(expectedActions);

    })

        it('render', () => {
        const expectedActions = {
            type: 'ORDERS_FETCH_DATA_SUCCESS',
            orders
        };
        expect(actions.ordersFetchDataSuccess(orders)).toEqual(expectedActions);

    })

        it('render', () => {
        const expectedActions = {
            type: 'ORDERS_POST_DATA_SUCCESS',
            orders
        };
        expect(actions.ordersPostDataSuccess(orders)).toEqual(expectedActions);

        })
    
        it('render', () => {
        const expectedActions = {
            type: 'STOCKS_FETCH_DATA_SUCCESS',
            stocks
        };
        expect(actions.stocksFetchDataSuccess(stocks)).toEqual(expectedActions);

        })
    
    //     it('render', () => {
    //     const expectedActions = {
    //         type: 'SEARCH_BY_'+search,
    //         key,item
    //     };
    //     expect(actions.searchOrder(key,item)).toEqual(expectedActions);

    // })
    
})
