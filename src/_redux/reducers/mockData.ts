import ActionTypes from "../actionTypes";
import {ReduxActionTypes, ResponseType} from "../../config/app-data-types";
import {ModifyMockData} from "./utils/updateMockData";

const MockDataReducer = (state: ResponseType[] = [], action: ReduxActionTypes) => {
    switch (action.type) {
        case ActionTypes.GET_MOCK:
            const modifyData = ModifyMockData(action.payload)
            return modifyData
        case ActionTypes.GET_SET_TEAM2WIN_COUNT:
            return state
        default:
            return state
    }
}
export default MockDataReducer