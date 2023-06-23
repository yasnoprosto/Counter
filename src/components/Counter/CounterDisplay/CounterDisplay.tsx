import React from "react";
import s from "./CounterDisplay.module.css"

type CounterTableProps = {
    count: number;
    maxValue: number;
}

export const CounterDisplay = (props: CounterTableProps) => {
    const {count, maxValue} = props

    return (
        <div  className={count < maxValue ? s.default : s.red}>
            {count}
        </div>
    );
};