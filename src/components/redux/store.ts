import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../localStorage/localStorage";
import {throttle} from "lodash";
import {startValueReducer} from "./startValueReducer";
import {maxValueReducer} from "./maxValueReducer";

const rootReducer = combineReducers({
        counterReducer,
        startValueReducer,
        maxValueReducer
    }
);

const persistedState = loadState()

export const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => {
    saveState({
        counter: store.getState().counterReducer,
        startValue: store.getState().startValueReducer,
        maxValue: store.getState().maxValueReducer
    });
}, 1000));

