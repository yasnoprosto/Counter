import {loadState, saveState} from "../localStorage/localStorage";

type setMaxValueAT = {
    type: "SET-MAX-VALUE"
    value: number
}

type ActionsType = setMaxValueAT

loadState()? loadState() : saveState(0);

const initialState = loadState().maxValue ? loadState().maxValue : 10;

console.log(initialState);

export const maxValueReducer = (state: number = initialState, action: ActionsType): number => {
    switch (action.type) {
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