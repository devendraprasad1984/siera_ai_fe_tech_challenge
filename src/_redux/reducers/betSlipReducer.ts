import ENUMS from "../enums";
import {BetItemType} from "../../config/app-data-types";

const initBetItem: any = {
    id: '-1',
    name: 'dummy',
    price: 0
}
const initState: BetItemType[] = [] //need to check why it was warning

const checkIfSelAlreadyPresent = (betsState: BetItemType[], selId: string) => {
    let found = false
    for (let index in betsState) {
        let bet: BetItemType = betsState[index]
        if (bet.id === selId) {
            found = true
            break
        }
    }
    return found
}
const BetSlipReducer = (state: BetItemType[] = initState, action: any) => {
    switch (action.type) {
        case ENUMS.BET_SLIP_ADD:
            let isFound=checkIfSelAlreadyPresent(state, action.payload.id)
            if(!isFound) return [...state, action.payload]
            return state
        case ENUMS.BET_SLIP_REMOVE:
            let itemToBeRemovedId = action.payload.id || -1
            let filter = state.filter((slip: any) => slip.id !== itemToBeRemovedId)
            return [...filter]
        default:
            console.log(action.type)
            return state
    }
}
export default BetSlipReducer