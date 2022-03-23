import React, {useEffect, useMemo} from "react";
import {MarketType, SelectionType} from "../../config/app-data-types";
import Selection from "./selection";
import {Card} from "antd";

type Props = {
    data: MarketType
}

const display = (data: MarketType): JSX.Element[] => {
    return data.selections.map((selection: SelectionType) => {
            return <Selection
                key={selection.id}
                data={selection}
                marketName={data.name}
                isTeamToWin={data.isTeamToWin}
                isSelected={data.isSelected}
            />

        }
    )
}

const Market: React.FC<Props> = (props: Props): JSX.Element => {
    const {data} = props
    console.log('inside market data selection', data.isSelected)
    const displayMarket = useMemo(() => display(data), [data.isSelected])
    const title = <span style={{fontWeight: 'bold'}}>{data.name}</span>
    return <Card type='inner' size='small' title={title}>
        {data.isTeamToWin && <span>is already selected {data.isSelected}</span>}
        <div className='row'>{displayMarket}</div>
    </Card>
}
export default React.memo(Market)