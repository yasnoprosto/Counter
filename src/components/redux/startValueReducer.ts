import {loadState, saveState} from "../localStorage/localStorage";

type setStartValueAT = {
    type: "SET-START-VALUE"
    value: number
}



type ActionsType = setStartValueAT

loadState()? loadState() : saveState(0);

const initialState = loadState().startValue ? loadState().startValue : 0;

export const startValueReducer = (state: number = initialState, action: ActionsType): number => {
    switch (action.type) {
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
