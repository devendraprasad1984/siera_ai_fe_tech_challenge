import React, {useState} from "react";
import {useNavigate, Link, Routes, Route} from 'react-router-dom'
import Home from "./home";
import NoDataOrPage from "./nodata";
import BetSlip from "./betslip";
import ENUMS from "../config/enum";
import {Layout} from 'antd';
import {MenuOutlined} from "@ant-design/icons";

const {Header, Footer, Content} = Layout;

type Props = {}
const Main: React.FC<Props> = (props): JSX.Element => {
    const [betSlipVisible, setBetSlipVisible] = useState(false)
    // const navigate = useNavigate()

    const prepareRoutes = () => {
        return <>
            <Route path={ENUMS.routes.names.home} element={<Home/>}/>
            {/*<Route path={ENUMS.routes.names.betSlip} element={<BetSlip visible={betSlipVisible}/>}/>*/}
            <Route element={<NoDataOrPage/>}/>
        </>
    }
    const displayAllRoutes = () => {
        return <nav>
            <Link to={ENUMS.routes.names.home}>Home</Link>
            {/*<Link to={ENUMS.routes.names.betSlip}>BetSlip</Link>*/}
        </nav>
    }
    const handleBetWindow = (mode: boolean) => {
        setBetSlipVisible(mode)
        // navigate(ENUMS.routes.names.betSlip.substring(1))
    }
    return (
        <Layout>
            <MenuOutlined onClick={()=>handleBetWindow(!betSlipVisible)}/>
            <BetSlip visible={betSlipVisible} handleBetWindow={handleBetWindow}/>
            <Header>
                {displayAllRoutes()}
            </Header>
            <Content>
                <Routes>{prepareRoutes()}</Routes>
            </Content>
            {/*<Footer>footer goes here</Footer>*/}
        </Layout>
    )
}

export default Main