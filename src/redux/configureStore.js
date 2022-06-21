import {createStore, combineReducers, applyMiddleware, compose  } from "redux";

import post from "./modules/post";

//Reducer 모음
const rootReducer = combineReducers({post});

const store = createStore(rootReducer);

export default store;
