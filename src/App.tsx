import React, {useEffect, useState} from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {store} from "./components/redux/store";
import {loadState} from "./components/localStorage/localStorage";


function App() {
    const [maxValue, setMaxValue] = useState(10);
    const [startValue, setStartValue] = useState(0);


    console.log(loadState().counter);
    return (

        <div className={"App"}>

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Counter maxValue={maxValue}
                                                      startValue={startValue}/>}/>
                    <Route path={"/counter"} element={<Counter maxValue={maxValue}
                                                             startValue={startValue}/>}/>
                    <Route path={"/settings"} element={<CounterSettings maxValue={maxValue} setMaxValue={setMaxValue}
                                                                      startValue={startValue}
                                                                      setStartValue={setStartValue}/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}
export default App;
