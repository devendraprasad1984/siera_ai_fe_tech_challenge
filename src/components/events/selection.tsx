import React, {useCallback} from "react";
import {BetItemType, SelectionType} from "../../config/app-data-types";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Actions from "../../_redux/actions";
import {RootState} from "../../_redux/store";

type Props = {
    data: SelectionType,
    marketName: string
}
const Selection: React.FC<Props> = (props: any): JSX.Element => {
    const {data, marketName} = props

    let btnStyle: any = {}
    const dispatch = useDispatch()

    const betsPlacedByUser: BetItemType[] = useSelector((_: RootState) => _.bets)
    const selectionIdsInBets = betsPlacedByUser.map((_: BetItemType) => _.id)

    if (selectionIdsInBets.indexOf(data.id) !== -1) {
        btnStyle['backgroundColor'] = '#4edb4e'
    } else
        btnStyle = {}

    const payload: BetItemType = {
        id: data.id,
        name: data.name + ' ' + marketName,
        price: data.price
    }

    const handleAddToBet = useCallback(() => {
        dispatch(Actions.betActions.BetItemAdd(payload))
    }, [])
    return <Button onClick={handleAddToBet} style={btnStyle}>
        <div className='col'>
            <span style={{fontWeight: 'bold'}}>{data.name}</span>
            <span style={{fontWeight: 'bold', fontSize: '12px'}}>{data.price}</span>
        </div>
    </Button>
}
export default Selection