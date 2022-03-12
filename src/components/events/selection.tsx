import React from "react";
import {BetItemType, SelectionType} from "../../config/app-data-types";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import Actions from "../../_redux/actions";

type Props = {
    data: SelectionType,
    marketName: string
}
const Selection: React.FC<Props> = (props: any): JSX.Element => {
    const {data, marketName} = props
    const dispatch = useDispatch()

    const payload: BetItemType = {
        id: data.id,
        name: data.name + ' ' + marketName,
        price: data.price
    }

    const handleAddToBet = () => {
        dispatch(Actions.betActions.BetItemAdd(payload))
    }
    return <Button onClick={handleAddToBet}>
        <div className='col'>
            <span style={{fontWeight: 'bold'}}>{data.name}</span>
            <span style={{fontWeight: 'bold', fontSize: '12px'}}>{data.price}</span>
        </div>
    </Button>
}
export default Selection