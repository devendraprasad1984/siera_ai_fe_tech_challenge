import ENUMS from "../enums";

const init: string[] = []
const MockDataReducer = (state: any = init, action: any) => {
    switch (action.type) {
        case ENUMS.GET_MOCK:
            return [...action.payload]
        default:
            return state
    }
}
export default MockDataReducer