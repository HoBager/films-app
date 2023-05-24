import { combineReducers, createStore } from "redux";
import modalReducer from "./reducers/modal";
import paginatoinReducer from "./reducers/pagination";
import filtersReducer from "./reducers/filters";
import authtorizationReducer from "./reducers/authtorization";
import searchReducer from "./reducers/search";
import userListsReducer from "./reducers/user-lists";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  modalReducer,
  paginatoinReducer,
  filtersReducer,
  authtorizationReducer,
  searchReducer,
  userListsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userListsReducer", "authtorizationReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
