import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../localStorage/localStorage";
import {throttle} from "lodash";

const rootReducer = combineReducers({
        counterReducer: counterReducer,
    }
);

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    saveState({
        counter: store.getState().counterReducer
    });
});

store.subscribe(throttle(() => {
    saveState({
        counter: store.getState().counterReducer
    });
}, 1000));

