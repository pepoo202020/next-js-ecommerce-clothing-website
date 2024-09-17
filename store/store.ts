import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  // example: user: userReducer
  favorites: favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
