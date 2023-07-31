import React, {ChangeEvent} from "react";
import s from "./CounterSettings.module.css";
import {CounterSettingsInput} from "./CounterSettingsInput/CounterSettingsInputType";
import {CounterButton} from "../Counter/CounterButton/CounterButton";
import {v1} from "uuid";
import {useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setStartValueAC} from "../redux/counterReducer";
import {setMaxValueAC} from "../redux/maxValueReducer";

type CounterSettingsType = {
    maxValue: number
    startValue: number
}

export const CounterSettings = (props: CounterSettingsType) => {

    const {maxValue, startValue} = props

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const inputMaxValueId = v1();
    const inputStartValueId = v1();


    const onInputChange = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        if(id === inputMaxValueId && Number(e.currentTarget.value) > startValue) {
            dispatch(setMaxValueAC(Number(e.currentTarget.value)))
        }
        if(id === inputStartValueId
            && Number(e.currentTarget.value) < maxValue
            && Number(e.currentTarget.value) > 0) {
            dispatch(setStartValueAC(Number(e.currentTarget.value)))
        }
    };

    const onClickButton = () => {
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


