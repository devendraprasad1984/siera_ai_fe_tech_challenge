import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import ErrorReducer from "./reducers/errorReducer";
import MockDataReducer from "./reducers/mockData";
import BetSlipReducer from "./reducers/betSlipReducer";

//this is just a dummy function to show middleware call
const sayHi = (param: any) => (next: any) => (action: any) => {
    console.log('printing state object', store.getState())
    next(action)
}

const _thunk = applyMiddleware(thunk, sayHi)
const enhancers = compose(_thunk)
const rootReducers = combineReducers({
    errors: ErrorReducer,
    mockdata: MockDataReducer,
    bets: BetSlipReducer
})
const store = createStore(rootReducers, undefined, enhancers)
export type RootState = ReturnType<typeof rootReducers>
export default store