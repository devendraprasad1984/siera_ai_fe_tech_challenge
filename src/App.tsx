import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {useSelector, useDispatch} from 'react-redux'
import {pullMockData} from "./_redux/api/pull";
import Endpoints from "./config/endpoints";
import Test from "./components/test";

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
        </div>
    );
}

export default App;
