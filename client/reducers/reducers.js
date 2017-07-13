export function dataHasErrored(state = false, action) {
    switch (action.type) {
        case 'DATA_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}
export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}


export function users(state = [], action){
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;
        default:
            return state;
    }
}
export function orders(state=[],action){
    switch(action.type){
        case 'ORDERS_FETCH_DATA_SUCCESS':
        var newState = action.orders;
        return newState;

        case 'orderCreatedEvent':
        return [...state,action.data];

        case 'allOrdersDeletedEvent':
        return [];

        case 'placementCreatedEvent':
        var i;
        for(i=0;i<state.length;i++){
            if(state[i].id==action.data.orderId){
                state[i].quantityPlaced+=action.data.quantityPlaced;
                state[i].status=action.data.status;
                }
            }
        return [...state];

        case 'executionCreatedEvent':
        var i;
        for(i=0;i<state.length;i++){
            if(state[i].id==action.data.orderId){
                state[i].quantityExecuted+=action.data.quantityExecuted;
                state[i].status=action.data.status;
                }
            }
        return [...state];
        default:
        return state;
    }
}

export function stocks(state = [], action){
 
    switch (action.type) {
        case 'STOCKS_FETCH_DATA_SUCCESS':
            return action.stocks;
        default:
            return state;
    }
}
export function selectedUser(state=[],action){
    switch(action.type){
        case 'SELECTED_USER':
        var myUser=action.user;
        var newState = myUser
        return newState;

        default:
        return state;
    }
}


export function searchitems(state=[],action){
    let newOrder=[];
    switch(action.type){
        case "SEARCH_BY_ID":
            action.items.map((item,index)=>{
                if(item.id.toString().toLowerCase().indexOf(action.key.toLowerCase())!=-1){
                    newOrder.push(item)
                }
            })
            return newOrder;

        case "SEARCH_BY_SIDE":
            action.items.map((item,index)=>{
                if(item.side.toString().toLowerCase().indexOf(action.key.toLowerCase())!=-1){
                    newOrder.push(item)
                }
            })
            return newOrder;
        
        case "SEARCH_BY_SYMBOL":
            action.items.map((item,index)=>{
                if(item.symbol.toString().toLowerCase().indexOf(action.key.toLowerCase())!=-1){
                    newOrder.push(item)
                }
            })
            return newOrder;
        
        case "SEARCH_BY_QUANTITY":
            action.items.map((item,index)=>{
                if(item.quantity.toString().toLowerCase().indexOf(action.key.toLowerCase())!=-1){
                    newOrder.push(item)
                }
            })
            return newOrder;
        
        case "SEARCH_BY_STATUS":
            action.items.map((item,index)=>{
                if(item.status.toString().toLowerCase().indexOf(action.key.toLowerCase())!=-1){
                    newOrder.push(item)
                }
            })
            return newOrder;
        
        case "SEARCH_BY_TRADER":
            action.items.map((item,index)=>{
                if(item.traderId.toString().toLowerCase().indexOf(action.key.toLowerCase())!=-1){
                    newOrder.push(item)
                }
            })
            return newOrder;
            default:
            return state;
    }
}
