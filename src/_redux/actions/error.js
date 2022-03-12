import ENUMS from "../enums";

const AppError = (payload) => {
    return {
        type: ENUMS.SET_API_ERROR,
        payload
    }
}
export default AppError