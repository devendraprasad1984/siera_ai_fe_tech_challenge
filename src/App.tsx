import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {useSelector, useDispatch} from 'react-redux'
import {pullMockData} from "./_redux/api/pull";
import Endpoints from "./config/endpoints";
import Test from "./components/test";
import Main from "./components/main";
import {BrowserRouter} from "react-router-dom";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        pullMockData(Endpoints.mockUrl)(dispatch)
        return () => {
            //app unmount
        }
    }, [])
    return (
        <div className="App">
            <h1>bet easy app</h1>
            <Test/>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </div>
    );
}

export default App;
