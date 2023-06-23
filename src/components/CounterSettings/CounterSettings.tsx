import React, {ChangeEvent, useState} from "react";
import s from "./CounterSettings.module.css";
import {CounterSettingsInput} from "./CounterSettingsInput/CounterSettingsInput";
import {CounterButton} from "../Counter/CounterButton/CounterButton";
import {v1} from "uuid";
import {useNavigate } from 'react-router-dom';

type CounterSettings = {
    maxValue: number
    setMaxValue: React.Dispatch<React.SetStateAction<number>>
    startValue: number
    setStartValue: React.Dispatch<React.SetStateAction<number>>
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const CounterSettings = (props: CounterSettings) => {

    const {maxValue, setMaxValue, startValue, setStartValue, setCount} = props
    const navigate = useNavigate();

    const inputMaxValueId = v1();
    const inputStartValueId = v1();


    const onInputChange = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        if(id === inputMaxValueId && Number(e.currentTarget.value) > startValue) {
            setMaxValue(Number(e.currentTarget.value))
            localStorage.setItem("maxValue", e.currentTarget.value)
        }
        if(id === inputStartValueId && Number(e.currentTarget.value) < maxValue && Number(e.currentTarget.value) > 0) {
            setStartValue(Number(e.currentTarget.value))
            localStorage.setItem("startValue", e.currentTarget.value)
        }
    };

    const onClickButton = () => {
        setCount(startValue)
        navigate('/counter');
    }


    return (
        <div className={s.wrapper}>
            <CounterSettingsInput id={inputMaxValueId} name={"Max Value"} callback={onInputChange} value={maxValue}/>
            <CounterSettingsInput id={inputStartValueId} name={"Start Value"} callback={onInputChange} value={startValue}/>
            <CounterButton name={"set"} callback={onClickButton} disabled={false}/>
        </div>
    );
};


