import {combineReducers, legacy_createStore} from "redux";
import {CardReducer} from "./Card-Reducer";
import {tagsReducer} from "./TagsReducer";


const rootReducer = combineReducers({
    card: CardReducer,
    tags: tagsReducer
})
export const store = legacy_createStore(rootReducer)


export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;