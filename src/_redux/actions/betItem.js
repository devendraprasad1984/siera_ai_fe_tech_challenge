import ENUMS from "../enums";

export const BetItemAdd = (payload) => {
    return {
        type: ENUMS.BET_SLIP_ADD,
        payload
    }
}
export const BetItemRemove = (payload) => {
    return {
        type: ENUMS.BET_SLIP_REMOVE,
        payload
    }
}
export const BetItemList = () => {
    return {
        type: ENUMS.BET_SLIP_LIST,
    }
}
