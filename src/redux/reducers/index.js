/*
* 4. işlem => 3
* reducers oluşturduk combine ettik
 */
import { combineReducers } from "redux";
import counterReducer      from "./counter";
import newData             from "./newData";

const reducers = combineReducers({
    counterReducer,
    newData,
});

export default reducers;

//combine olarak functionlar çağaracağız
