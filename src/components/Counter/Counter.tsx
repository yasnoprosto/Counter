import React, {Dispatch, SetStateAction, useState} from "react";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterButton} from "./CounterButton/CounterButton";
import s from "./Counter.module.css";
import {useNavigate} from "react-router-dom";

type CounterProps = {
    maxValue: number
    startValue: number
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
};


const Counter = (props: CounterProps) => {
    const {count, setCount, maxValue, startValue} = props;
    const navigate = useNavigate();


    const onClick = (type: "increment" | "reset") => {
        if (count < maxValue) {
            switch (type) {
                case "increment":
                    return setCount(count + 1);
            }
        }
        switch (type) {
            case "reset":
                return setCount(startValue);
        }
    };

    const setIncrement = () => {
        onClick("increment");
    };
    const setReset = () => {
        onClick("reset");
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
