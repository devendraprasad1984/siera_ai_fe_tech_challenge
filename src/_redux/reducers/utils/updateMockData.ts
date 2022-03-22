import ENUMS from "../../../config/enum";
import {ResponseType} from "../../../config/app-data-types";

export const ModifyMockData = (mockData: ResponseType) => {
    let allMarkets = mockData.filter((x: any) => x.markets.length !== 0)
    let newDataObj = allMarkets.map((row: any) => {
        for (let market of row.markets) {
            let isTeamToWin = (market.name === ENUMS.consts.TeamToWin)
            market["isTeamToWin"] = isTeamToWin
            if (isTeamToWin) market["isSelected"] = 0
        }
        return row
    })
    return newDataObj

}

export const GETSETTeamToWinCount = (data: ResponseType, selId: string) => {
    let newDataObj = data.map((row: any) => {
        for (let market of row.markets) {
            market["isSelected"] = 1
        }
        return row
    })
    return newDataObj

}