import ENUMS from "../enums";

const MockData = (payload) => {
    return {
        type: ENUMS.GET_MOCK,
        payload
    }
}
export default MockData