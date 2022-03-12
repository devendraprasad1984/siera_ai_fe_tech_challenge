import MockData from "../actions/mockData";
import AppError from "../actions/error";

const initOptions: any = {
    method: 'get',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
type ResponseType = { data: any, error: boolean, err: any }

export const pullDataFromServer = async (url: string): Promise<ResponseType> => {
    try {
        let res = await fetch(url, initOptions)
        let data = await res.json()
        return {data, error: false, err: undefined}
    } catch (err: any) {
        console.log(`error while running ${url}`, err)
        return {err, error: true, data: undefined}
    }
}

export const pullMockData = (url: string) => {
    return async (dispatch: any) => {
        let {data, err, error} = await pullDataFromServer(url)
        if (!error) dispatch(MockData(data)) //set mock data in central state for app
        if (error) dispatch(AppError(err)) //store all errors for logging purposes
    }
}