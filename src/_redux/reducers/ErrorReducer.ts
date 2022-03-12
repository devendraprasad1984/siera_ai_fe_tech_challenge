import ENUMS from "../enums";

const initError: string[] = []
const ErrorReducer = (state: any = initError, action: any) => {
    switch (action.type) {
        case ENUMS.SET_API_ERROR:
            return [...state, action.payload]
        default:
            return state
    }
}
export default ErrorReducer