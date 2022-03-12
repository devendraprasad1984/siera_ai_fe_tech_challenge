import React from "react";
import EventList from "./events/event-list";

type Props = {}
const Home: React.FC<Props> = (props): JSX.Element => {
    return <div>
        <EventList/>
    </div>
}
export default Home