import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {useDispatch} from 'react-redux'
import {pullMockData} from "./_redux/api/pull";
import Endpoints from "./config/endpoints";
import Main from "./components/main";
import {BrowserRouter} from "react-router-dom";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        pullMockData(Endpoints.mockUrl)(dispatch)
        return () => {
            console.log('app is unmounting, some cleanup/log info if required may go here')
        }
    }, [])
    return (
        <div className="App">
            <h1>bet easy app</h1>
            <h3 className='handwritting'>completed by devendraprasad1984@gmail.com, +91 9582797772</h3>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </div>
    );
}

export default App;
