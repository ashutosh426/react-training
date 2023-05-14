
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import bookReducer from "../reducers/bookReducer";
import bookSaga from "../saga/bookSaga";

// const store = createStore(bookReducer);
const sagaMiddleWare =createSagaMiddleware();
const store= configureStore({
    reducer:bookReducer,
    middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(bookSaga);

export default store;