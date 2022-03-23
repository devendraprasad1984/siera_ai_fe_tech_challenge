import React, {useCallback} from "react";
import {BetItemType, SelectionType} from "../../config/app-data-types";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Actions from "../../_redux/actions";
import {RootState} from "../../_redux/store";

type Props = {
    data: SelectionType,
    marketName: string,
    isTeamToWin: boolean,
    isSelected: number
}
const Selection: React.FC<Props> = (props: any): JSX.Element => {
    const {data, marketName, isTeamToWin, isSelected} = props
    const dontAllowClicks = (isTeamToWin && isSelected === 1)
    // console.log('in sel', data)
    let btnStyle: any = {}
    const dispatch = useDispatch()

    const betsPlacedByUser: BetItemType[] = useSelector((_: RootState) => _.bets)
    const selectionIdsInBets = betsPlacedByUser.map((_: BetItemType) => _.id)

    if (selectionIdsInBets.indexOf(data.id) !== -1 && !dontAllowClicks) {
        dispatch(Actions.mockActions.actionGetSetSelCount({selId: data.id, type: 'add'}))
        btnStyle['backgroundColor'] = '#4edb4e'
    } else {
        dispatch(Actions.mockActions.actionGetSetSelCount({selId: data.id, type: 'remove'}))
        btnStyle = {}
    }

    const payload: BetItemType = {
        id: data.id,
        name: data.name + ' ' + marketName,
        price: data.price
    }

    const handleAddToBet = useCallback(() => {
        if (dontAllowClicks) return //dont allow if isTeamToWin and already selected
        dispatch(Actions.betActions.BetItemAdd(payload))
    }, [])

    return <Button onClick={handleAddToBet} style={btnStyle}>
        <div className='col'>
            <span style={{fontWeight: 'bold'}}>{data.name}</span>
            <span style={{fontWeight: 'bold', fontSize: '12px'}}>{data.price}</span>
        </div>
    </Button>
}
export default React.memo(Selection)