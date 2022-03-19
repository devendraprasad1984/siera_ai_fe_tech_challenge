import React from "react";
import {EventType, MarketType} from "../../config/app-data-types";
import Market from "./market";
import {Card} from "antd";

type Props = {
    event: EventType
}

const Event: React.FC<Props> = (props: any): JSX.Element => {
    const {event} = props

    const display = (): JSX.Element[] => {
        return event.markets.map((market: MarketType) => <Market key={market.id} data={market}/>)
    }

    const title=<h2>{event.name}</h2>
    return <Card title={title} bordered={true}>
        {display()}
    </Card>
}
export default React.memo(Event)