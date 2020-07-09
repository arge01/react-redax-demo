/*
* 3. işlem => 4
* actionları payload dan güncelledik.
 */
import * as actionTypes        from '../../actions/actionTypes';
import { counterInitialState } from "./counterInitialState";

const counterReducer = (state= counterInitialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state = state + action.payload;

        case actionTypes.DECREMENT:
            return state = state + action.payload;

        case actionTypes.EMPTY:
            return state = counterInitialState;

        default:
            return state;
    }
};

export default counterReducer;
