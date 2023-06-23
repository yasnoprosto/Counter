import React, {useState} from "react";
import {CounterDisplay} from "./CounterDisplay";
import {CounterButton} from "./CounterButton";


const Counter = () => {

    const [count, setCount] = useState(0);


    const onClick = (type: "increment" | "reset") => {
        if (count < 5) {
            switch (type) {
                case "increment":
                    return setCount(count + 1);
            }
        }
        switch (type) {
            case "reset":
                return setCount(0);
        }
    };

    let setIncrement = () => {
        onClick("increment");
    };
    let setReset = () => {
        onClick("reset");
    };

    return (
        <div>
            <CounterDisplay count={count}/>
            <div>
                <CounterButton
                    name={"inc"}
                    callback={setIncrement}
                    disabled={count >= 5}/>

                <CounterButton
                    name={"reset"}

                    callback={setReset}
                    disabled={count === 0}/>
            </div>
        </div>
    );
};

export default Counter;
