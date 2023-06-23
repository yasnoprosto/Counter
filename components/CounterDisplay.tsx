import React from "react";
import s from "./CounterDisplay.module.css"

type CounterTableProps = {
    count: number;
}

export const CounterDisplay = (props: CounterTableProps) => {
    const {count} = props

    return (
        <div  className={count < 5 ? s.default : s.red}>
            {count}
        </div>
    );
};