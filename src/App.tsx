import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {} from "./components/localStorage/localStorage";
import {useSelector} from "react-redux";
import {store} from "./components/redux/store";


function App() {

    const maxValue = useSelector(state => store.getState().maxValueReducer)
    const startValue = useSelector(state => store.getState().startValueReducer)

    return (

        <div className={"App"}>

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Counter maxValue={maxValue}
                                                      startValue={startValue}/>}/>
                    <Route path={"/counter"} element={<Counter maxValue={maxValue}
                                                             startValue={startValue}/>}/>
                    <Route path={"/settings"} element={<CounterSettings maxValue={maxValue}
                                                                      startValue={startValue}/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}
export default App;
