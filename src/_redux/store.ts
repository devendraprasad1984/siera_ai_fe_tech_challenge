import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import ErrorReducer from "./reducers/ErrorReducer";
import MockDataReducer from "./reducers/MockData";

const sayHi = (param: any) => (next: any) => (action: any) => {
    console.log('hi on every dispatch', param)
    next(action)
}

const _thunk = applyMiddleware(thunk)
const enhancers = compose(
    _thunk
)
const rootReducers = combineReducers({
    errors: ErrorReducer,
    mockdata: MockDataReducer
})
const store = createStore(rootReducers, undefined, enhancers)
export type RootState=ReturnType<typeof rootReducers>
export default store