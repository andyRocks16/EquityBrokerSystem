import { dataIsLoading, dataHasErrored, usersFetchDataSuccess, ordersFetchDataSuccess, stocksFetchDataSuccess } from './actions/actions.js'
import axios from 'axios';

//urls
export var socketurl="https://guarded-cove-51655.herokuapp.com/orders";
export var userurl="https://guarded-cove-51655.herokuapp.com/users";
export var instrumenturl="https://guarded-cove-51655.herokuapp.com/instruments";

//axios
export function getUsers(url, data = undefined) {

    return (dispatch) => {
        dispatch(dataIsLoading(true));

        if (data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
                .then(function (response) {
                    dispatch(usersFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));
                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
        else if (!data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
                .then(function (response) {

                    dispatch(usersFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));

                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
    };
}


export function getOrders(url, data) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        if (data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
                .then(function (response) {
                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
        else if (!data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
                .then(function (response) {
                    dispatch(ordersFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));

                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }


    };
}

export function getStocks(url, data = undefined) {

    return (dispatch) => {
        dispatch(dataIsLoading(true));

        if (data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'post',
                data,
                responseType: 'json'
            })
                .then(function (response) {
                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }
        else if (!data) {
            return axios({
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'json'
            })
                .then(function (response) {

                    dispatch(stocksFetchDataSuccess(response.data));
                    dispatch(dataIsLoading(false));

                })
                .catch(function (response) {
                    dispatch(dataHasErrored(response.data));
                })
        }


    };
}

export function deleteOrder(url, data = undefined) {

    return (dispatch) => {
        dispatch(dataIsLoading(true));


        return axios({
            url: url,
            timeout: 20000,
            method: 'delete',
            responseType: 'json'
        })
            .then(function (response) {
            })
            .catch(function (response) {
                dispatch(dataHasErrored(response.data));
            })


    };
}
