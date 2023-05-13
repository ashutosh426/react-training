import { createStore } from "redux";
import cookieReducer from "../reducers/cookieReducer";

const store = createStore(cookieReducer);

export default store;