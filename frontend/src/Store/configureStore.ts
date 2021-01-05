import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppTheme } from "../Services/AppTheme";
import settingsReducer from "./settings";
import { setupSettingsStorage } from "./setupSettingsStorage";

const reducer = combineReducers({ settings: settingsReducer });

export const store = configureStore({ reducer });

store.subscribe(() => {
  AppTheme.loadTheme();
});

setupSettingsStorage();

export default store;
