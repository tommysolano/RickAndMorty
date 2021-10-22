import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import RickAndMortyReducer from "./Duck"

const rootReducer = combineReducers({
    characters: RickAndMortyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}