import MockData from "../actions/mockData";
import AppError from "../actions/error";

const initOptions: any = {
    method: 'get',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
type ResponseType = { data: any, error: boolean, err: any }

export const pullDataFromServer = (url: string): ResponseType => {
    fetch(url, initOptions)
        .then((res: any) => res.json())
        .then((data: any) => {
            return {data, error: false}
        })
        .catch((err: any) => {
            console.log(`error while running ${url}`, err)
            return {err, error: true}
        })
    return {data: [], error: false, err: undefined}
}

export const pullMockData = (url: string) => {
    return (dispatch: any) => {
        let {data, err, error} = pullDataFromServer(url)
        if (!error) dispatch(MockData(data)) //set mock data in central state for app
        if (error) dispatch(AppError(err)) //store all errors for logging purposes
    }
}