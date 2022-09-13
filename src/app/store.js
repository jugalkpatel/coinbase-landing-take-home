import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import dataReducer from "../features/state/dataSlice";
import { root } from "../features/state/dataSlice.saga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    app: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(sagaMiddleware),
});

sagaMiddleware.run(root);
