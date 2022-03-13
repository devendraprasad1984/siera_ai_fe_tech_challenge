import ActionTypes from "../actionTypes";
import {ReduxActionTypes} from "../../config/app-data-types";

const MockDataReducer = (state: any = [], action: ReduxActionTypes) => {
    switch (action.type) {
        case ActionTypes.GET_MOCK:
            return [...action.payload]
        default:
            return state
    }
}
export default MockDataReducer