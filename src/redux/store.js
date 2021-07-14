import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

export const initialState = {};

const enhancer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : null
      )
    : null;
export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);

const ex = { store, persistor };
export default ex;
