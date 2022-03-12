import React, {useState} from "react";
import Logger from "../hoc/logger";
import DrawerNav from "./drawer";

type Props = {
    visible: boolean,
    handleBetWindow: (mode: boolean) => void
}
const BetSlip: React.FC<Props> = (props): JSX.Element => {
    const {visible, handleBetWindow} = props

    const handleClose = () => {
        handleBetWindow(!visible)
    }
    return <DrawerNav
        placement='right'
        visible={visible}
        onClose={handleClose}
    >
        <>
            <div>bet slip goes here</div>
            <button onClick={handleClose}>Close</button>
        </>
    </DrawerNav>
}
export default Logger(BetSlip)