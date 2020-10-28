import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "redux/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "redux/saga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [applyMiddleware(sagaMiddleware), applyMiddleware(thunk)];

// export const store = createStore(reducer, middlewares)

export const store =
  process.env.NODE_ENV === "development" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? createStore(
        reducer,
        {},
        compose(...middlewares, window.__REDUX_DEVTOOLS_EXTENSION__())
      )
    : createStore(reducer, {}, compose(...middlewares));

sagaMiddleware.run(rootSaga);
