
export function dataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: bool
    };
}
export function dataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}
export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}
export function dispatchToDisplay(user) {
    return {
        type: 'SELECTED_USER',
        user
    }
}

export function selectedUser(user) {
    return (dispatch) => {
        dispatch(dispatchToDisplay(user));
    }
}

export function ordersFetchDataSuccess(orders) {
    return {
        type: 'ORDERS_FETCH_DATA_SUCCESS',
        orders
    };
}
export function ordersPostDataSuccess(orders) {
    return {
        type: 'ORDERS_POST_DATA_SUCCESS',
        orders
    };
}
export function stocksFetchDataSuccess(stocks) {
    return {
        type: 'STOCKS_FETCH_DATA_SUCCESS',
        stocks
    };
}
export function updateOrder(reply, data) {
    return {
        type: reply
        , data
    };
}
export function searchOrder(key,search,items) {
    return {
        type:"SEARCH_BY_"+search,
        key,
        items
    };
}

