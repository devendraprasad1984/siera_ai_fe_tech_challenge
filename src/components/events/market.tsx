import React from "react";
import {MarketType, SelectionType} from "../../config/app-data-types";
import Selection from "./selection";
import {Card} from "antd";

type Props = {
    data: MarketType
}

const Market: React.FC<Props> = (props: any): JSX.Element => {
    const {data} = props

    const display = (): JSX.Element[] => {
        return data.selections.map((selection: SelectionType) => <Selection key={selection.id} data={selection} marketName={data.name}/>)
    }
    const title=<span style={{fontWeight: 'bold'}}>{data.name}</span>
    return <Card type='inner' size='small' title={title}>
        <div className='row'>{display()}</div>
    </Card>
}
export default React.memo(Market)