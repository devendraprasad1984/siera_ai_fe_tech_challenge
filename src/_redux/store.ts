import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import ErrorReducer from "./reducers/ErrorReducer";
import MockDataReducer from "./reducers/MockData";

const sayHi = (param: any) => (next: any) => (action: any) => {
    console.log('hi its dispatch', param)
    next(action)
}

const _thunk = applyMiddleware(thunk)
const enhancers = compose(
    _thunk
)
const rootReducers = combineReducers({
    ErrorReducer,
    MockDataReducer
})
const store = createStore(rootReducers, undefined, enhancers)
export default store