import {loadState, saveState} from "../localStorage/localStorage";


type incrementStartValueAT = {
    type: "INCREMENT-START-VALUE"
}

type decrementStartValueAT = {
    type: "DECREMENT-START-VALUE"
}

type setStartValueAT = {
    type: "SET-START-VALUE"
    value: number
}



type ActionsType = incrementStartValueAT | decrementStartValueAT | setStartValueAT

loadState()? loadState() : saveState(0);

const initialState = loadState().startValue ? loadState().startValue : 0;

export const startValueReducer = (state: number = initialState, action: ActionsType): number => {
    switch (action.type) {
        case "INCREMENT-START-VALUE": {
            const newState = state
            return newState + 1;
        }
        case "DECREMENT-START-VALUE": {
            const newState = state
            return newState - 1;
        }
        case "SET-START-VALUE": {
            return action.value
        }
        default:
            return state;
    }
};

export const setStartValueAC = (value: number): setStartValueAT => {
    return {type: "SET-START-VALUE", value};
};

export const incrementMaxValueAC = (): incrementStartValueAT => {
    return {type: "INCREMENT-START-VALUE"};
};

export const decrementMaxValueAC = (): decrementStartValueAT => {
    return {type: "DECREMENT-START-VALUE"};
};