// store.js
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import expenseReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, expenseReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
