import React from "react";
import Logger from "../hoc/logger";
import DrawerNav from "./drawer/drawer";
import {CloseSquareOutlined} from "@ant-design/icons";
import {fontSize30} from "../config/styles";

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
        <div>
            <div className='right-flex'>
                <CloseSquareOutlined style={fontSize30} onClick={handleClose}/>
            </div>
            <div>bet slip goes here</div>
        </div>
    </DrawerNav>
}
export default Logger(BetSlip)