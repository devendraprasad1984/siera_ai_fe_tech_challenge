import React from "react";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from "./home";
import Layout from "./layout";
import NoDataOrPage from "./nodata";
import BetSlip from "./betslip";
import ENUMS from "../config/enum";

type Props = {}
const Main: React.FC<Props> = (props): JSX.Element => {

    const prepareRoutes = () => {
        return <>
            <Route path={ENUMS.routes.names.home} element={<Home/>}/>
            <Route path={ENUMS.routes.names.profile} element={<Home/>}/>
            <Route path={ENUMS.routes.names.betSlip} element={<BetSlip/>}/>
            <Route element={<NoDataOrPage/>}/>
        </>
    }
    const displayAllRoutes = () => {
        return <nav>
            <Link to={ENUMS.routes.names.home}>Home</Link>
            <Link to={ENUMS.routes.names.profile}>Profile</Link>
            <Link to={ENUMS.routes.names.betSlip}>BetSlip</Link>
        </nav>
    }
    return (
        <BrowserRouter>
            <Routes>
                {prepareRoutes()}
            </Routes>
            <Layout>
                {displayAllRoutes()}
            </Layout>
        </BrowserRouter>
    )
}

export default Main