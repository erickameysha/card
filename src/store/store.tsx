import {combineReducers, createStore, legacy_createStore} from "redux";
import {CardReducer} from "./Card-Reducer";


const rootReducer = combineReducers({
    card: CardReducer
})
export const store = legacy_createStore(rootReducer)


export type AppRootStateType = ReturnType<typeof rootReducer>