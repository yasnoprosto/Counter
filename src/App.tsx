import React, {useState} from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";


function App() {
    const [count, setCount] = useState(Number(localStorage.getItem("startValue")));
    const [maxValue, setMaxValue] = useState(Number(localStorage.getItem("maxValue")));
    const [startValue, setStartValue] = useState(Number(localStorage.getItem("startValue")));

    return (

        <div className={"App"}>

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Counter count={count} setCount={setCount} maxValue={maxValue}
                                                      startValue={startValue}/>}/>
                    <Route path={"/counter"} element={<Counter count={count} setCount={setCount} maxValue={maxValue}
                                                             startValue={startValue}/>}/>
                    <Route path={"/settings"} element={<CounterSettings maxValue={maxValue} setMaxValue={setMaxValue}
                                                                      startValue={startValue}
                                                                      setStartValue={setStartValue}
                                                                      setCount={setCount}/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}
export default App;
