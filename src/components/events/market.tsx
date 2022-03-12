import React from "react";
import {MarketType, SelectionType} from "../../config/app-data-types";
import Selection from "./selection";

type Props = {
    data: MarketType
}

const Market: React.FC<Props> = (props: any): JSX.Element => {
    const {data} = props

    const display = (): JSX.Element[] => {
        return data.selections.map((selection: SelectionType) => <Selection key={selection.id} data={selection}/>)
    }
    return <div>
        {data.name}
        {display()}
    </div>
}
export default Market