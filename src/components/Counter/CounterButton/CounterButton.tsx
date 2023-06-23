import React from "react";
import s from "./CounterButton.module.css"

type CounterButtonProps = {
    name: string
    callback:()=>void
    disabled: boolean;
}

export const CounterButton = (props: CounterButtonProps) => {
    const {name, callback, disabled} = props

    const finalClassName = `${s.default} ${disabled ? s.disabled : ""}`

    return (
        <button className={finalClassName} disabled={disabled} onClick={callback}>{name}</button>
    );
};