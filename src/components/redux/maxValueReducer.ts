import {loadState, saveState} from "../localStorage/localStorage";


type incrementMaxValueAT = {
    type: "INCREMENT-MAX-VALUE"
}

type decrementMaxValueAT = {
    type: "DECREMENT-MAX-VALUE"
}

type setMaxValueAT = {
    type: "SET-MAX-VALUE"
    value: number
}

type ActionsType = incrementMaxValueAT | decrementMaxValueAT | setMaxValueAT

loadState()? loadState() : saveState(0);

const initialState = loadState().maxValue ? loadState().maxValue : 10;

console.log(initialState);

export const maxValueReducer = (state: number = initialState, action: ActionsType): number => {
    switch (action.type) {
        case "INCREMENT-MAX-VALUE": {
            const newState = state
            return newState + 1;
        }
        case "DECREMENT-MAX-VALUE": {
            const newState = state
            return newState - 1;
        }
        case "SET-MAX-VALUE": {
            return action.value;
        }
        default:
            return state;
    }
};

export const setMaxValueAC = (value: number): setMaxValueAT => {
    return {type: "SET-MAX-VALUE", value};
};

export const incrementMaxValueAC = (): incrementMaxValueAT => {
    return {type: "INCREMENT-MAX-VALUE"};
};

export const decrementMaxValueAC = (): decrementMaxValueAT => {
    return {type: "DECREMENT-MAX-VALUE"};
};