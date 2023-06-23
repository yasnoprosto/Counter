import React, {ChangeEvent} from "react";
import value from "*.png";
import s from "./CounterSettingsInput.module.css"

type CounterSettingsInput = {
    id: string;
    name: string
    callback:(id: string, e: ChangeEvent<HTMLInputElement>)=>void
    value: any
}

export const CounterSettingsInput = (props: CounterSettingsInput) => {
    const {name, callback, value, id} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(id, e);
    }

    return (
        <div className={s.wrapper}>
        <span>{name}</span><input value={value} type="number" onChange={onChangeHandler}/>
        </div>
    );
};
