import {loadState} from "../localStorage/localStorage";

type incrementCounterAT = {
    type: "INCREMENT"
}

type resetCounterAT = {
    type: "RESET"
}

type startValueAT = {
    type: "SET-START-VALUE"
    value: number
}

type ActionsType = incrementCounterAT | resetCounterAT | startValueAT

const initialState: number = loadState().counter;

export const counterReducer = (state: number = initialState, action: ActionsType): number => {
    switch (action.type) {
        case "INCREMENT": {
            return state + 1;
        }
        case "RESET": {
            return 0;
        }
        case "SET-START-VALUE": {
            return action.value;
        }
        default:
            return state;
    }
};

export const incrementCounterAC = () : incrementCounterAT => {
    return {type: "INCREMENT"};
};

export const resetCounterAC = (): resetCounterAT => {
    return {type: "RESET"};
};

export const setStartValueAC = (value: number): startValueAT => {
    return { type: "SET-START-VALUE", value }
};