import React, {useMemo} from "react";
import {MarketType, SelectionType} from "../../config/app-data-types";
import Selection from "./selection";
import {Card} from "antd";

type Props = {
    data: MarketType
}

const display = (data: any): JSX.Element[] => {
    return data.selections.map((selection: SelectionType) => <Selection key={selection.id} data={selection}
                                                                        marketName={data.name}/>)
}

const Market: React.FC<Props> = (props: any): JSX.Element => {
    const {data} = props

    const displayMarket = useMemo(() => display(data), [])
    const title = <span style={{fontWeight: 'bold'}}>{data.name}</span>
    return <Card type='inner' size='small' title={title}>
        <div className='row'>{displayMarket}</div>
    </Card>
}
export default React.memo(Market)