import {combineReducers, legacy_createStore} from "redux";
import {CardReducer} from "./Card-Reducer";
import {tagsReducer} from "./TagsReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig= {
    key:'root',
    storage: storage
}
const rootReducer = combineReducers({
    card: CardReducer,
    tags: tagsReducer
})
const persistedReducer= persistReducer(persistConfig, rootReducer)
export const store = legacy_createStore(persistedReducer)

export const  persister = persistStore(store)
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;