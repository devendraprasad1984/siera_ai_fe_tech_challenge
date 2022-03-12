import React from "react";
import {EventType, MarketType} from "../../config/app-data-types";
import Market from "./market";

type Props = {
    event: EventType
}

const Event: React.FC<Props> = (props: any): JSX.Element => {
    const {event} = props

    const display = (): JSX.Element[] => {
        return event.markets.map((market: MarketType) => <Market key={market.id} data={market}/>)
    }

    return <h2>
        {event.name}
        {display()}
    </h2>
}
export default Event