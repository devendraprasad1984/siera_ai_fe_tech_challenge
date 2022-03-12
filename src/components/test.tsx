import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../_redux/store";

type Props = {}

const Test: React.FC<Props> = (props: any): JSX.Element => {
    const mockdata = useSelector((state: RootState) => state.mockdata)

    return <div>
        {JSON.stringify(mockdata)}
    </div>
}
export default Test