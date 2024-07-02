import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  data: dataReducer,
});

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
};

// Create a persisted reducer with Redux Persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the Redux persistor for persisting store state
const persistor = persistStore(store);

// Export the store and persistor
export { store, persistor };
