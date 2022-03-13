import ActionTypes from "../actionTypes";

const MockData = (payload) => {
    return {
        type: ActionTypes.GET_MOCK,
        payload
    }
}
export default MockData