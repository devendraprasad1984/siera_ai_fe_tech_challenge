import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../_redux/store";
import {EventType, ResponseType} from "../../config/app-data-types";
import Event from "./event";

type Props = {}
const EventList: React.FC<Props> = (props): JSX.Element => {
    const {} = props
    const eventData: ResponseType = useSelector((_: RootState) => _.mockdata)
    const displayEventCards = (): any => {
        //logical flow=>events->markets->selections->selection
        return eventData.map((event: EventType) => {
            if (event.markets.length === 0) return null
            return <Event key={event.id} event={event} />
        })
    }
    return (
        <div>
            {displayEventCards()}
        </div>
    )
}
export default EventList