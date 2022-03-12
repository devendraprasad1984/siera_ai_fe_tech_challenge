import React from "react";
import {SelectionType} from "../../config/app-data-types";
import {Button} from "antd";

type Props = {
    data: SelectionType
}
const Selection: React.FC<Props> = (props: any): JSX.Element => {
    const {data} = props
    return <Button>
        <div className='col'>
            <span style={{fontWeight: 'bold'}}>{data.name}</span>
            <span style={{fontWeight: 'bold', fontSize: '12px'}}>{data.price}</span>
        </div>
    </Button>
}
export default Selection