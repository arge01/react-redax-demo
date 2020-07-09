/*
* 2. işlem => 5
* action ları yazdık...
 */
import * as actionTypes from '../actionTypes';

export const incrementCounter = () => ({
    type: actionTypes.INCREMENT,
    payload: 1
});

export const decreaseCounter = () => ({
    type: actionTypes.DECREMENT,
    payload: -1
});

export const emptyCounter = () => ({
    type: actionTypes.EMPTY
});
