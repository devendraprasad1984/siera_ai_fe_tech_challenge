import React from "react";
import {SelectionType} from "../../config/app-data-types";
import {Button} from "antd";

type Props = {
    data: SelectionType
}
const Selection: React.FC<Props> = (props: any): JSX.Element => {
    const {data} = props
    return <Button>
        {data.name}-{data.price}
    </Button>
}
export default Selection