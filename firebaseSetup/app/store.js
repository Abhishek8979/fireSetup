import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import rootReducer from './reducer'
//import promise from 'redux-promise'


// const middleware = applyMiddleware(promise);
// export default createStore(rootReducer, middleware);
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
export default store