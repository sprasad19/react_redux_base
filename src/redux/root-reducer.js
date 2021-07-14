import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import globalReducer from "./global/reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["global"],
};

const reducer = combineReducers({
    global:globalReducer
});

export default persistReducer(persistConfig, reducer);
