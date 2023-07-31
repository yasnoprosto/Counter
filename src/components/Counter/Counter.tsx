import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterButton} from "./CounterButton/CounterButton";
import s from "./Counter.module.css";
import {useNavigate} from "react-router-dom";
import {incrementCounterAC, resetCounterAC} from "../redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../redux/store";

type CounterProps = {
    maxValue: number
    startValue: number
};


const Counter = (props: CounterProps) => {
    const {maxValue, startValue} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const count = useSelector(state => store.getState().counterReducer)

    const setIncrement = () => {
        dispatch(incrementCounterAC());
    };
    const setReset = () => {
        dispatch(resetCounterAC());
    };

    const setPath = () => {
        navigate('/settings');
    };


    return (
        <div className={s.wrapper}>
            <CounterDisplay count={count} maxValue={maxValue}/>
            <div className={s.buttonWrapper}>
                <CounterButton
                    name={"inc"}
                    callback={setIncrement}
                    disabled={count >= maxValue}/>

                <CounterButton
                    name={"reset"}
                    callback={setReset}
                    disabled={count === startValue}/>

                <CounterButton
                    name={"set"}
                    callback={setPath}
                    disabled={false}/>
            </div>
        </div>
    );
};

export default Counter;
