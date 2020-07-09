/*
* 5. işlem => 2
* burası 1 kere yapılır
* createstore çağardık
* bunu 1 kere ayarlıyoruz
 */
import { createStore, applyMiddleware, /*compose*/ } from 'redux';
import reducers from './index';

//import { composeWithDevTools } from 'redux-devtools-extension';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);*/

const configureStore = () => {
    return createStore(
    	reducers,
    	//enhancer
    )
}

export default configureStore;

//birer configure strore olacak combine ettiğimiz store ları çağaracağız
