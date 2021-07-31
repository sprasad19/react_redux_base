import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
export const initialState = {};
const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});
const enhancer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(logger, sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : null
      )
    : compose(applyMiddleware(sagaMiddleware));
export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);

const ex = { store, persistor };
export default ex;
