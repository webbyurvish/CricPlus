// RootState.ts
import { combineReducers } from "@reduxjs/toolkit";
import matchReducer, { MatchSliceState } from "./slices/matchSlice";
import dataReducer, { DataState } from "./slices/dataSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface RootState {
  match: MatchSliceState;
  data: DataState;
}

const rootReducer = combineReducers({
  match: matchReducer,
  data: dataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["match", "data"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
