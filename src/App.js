import React from "react";
import { Routes, Route } from "react-router-dom";
import Display from "./components/display";
import Counter from "./components/counter";
import "./App.css";
import ListColors from "./components/listColors";
import BookStore from "./components/books/books-class-components/bookStore";
import BookStoreFunction from "./components/books/books-function-components/bookStoreFunction";
import Header from "./components/header";
import BookAddFunction from "./components/books/books-function-components/bookAddFunction";
import BookViewFunction from "./components/books/books-function-components/bookViewFunction";
import ToDoListParent from "./components/lifecycle-methods/toDoListParent";
import BookStoreHttpFunction from "./components/books/books-function-http-components/bookStoreHttpFunction";
import BookViewHttpFunction from "./components/books/books-function-http-components/bookViewHttpFunction";
import BookAddHttpFunction from "./components/books/books-function-http-components/bookAddHttpFunction";
import CookiesComponent from "./components/redux/react-redux-cookie-demo/components/cookiesComponent";
import { Provider } from "react-redux";
import store from "./components/redux/react-redux-saga-book-demo/store/store";
import BookStoreReduxFunction from "./components/redux/react-redux-book-demo/components/bookStoreReduxFunction";
import BookStoreReduxSagaFunction from "./components/redux/react-redux-saga-book-demo/components/bookStoreReduxFunction";
import HooksHeader from "./components/hooks/hooks-header";
import CounterTitleClass from "./components/hooks/use-effect-demo/counterTitleClass";
import UseStateDemo from "./components/hooks/useStateDemo";
import CounterTitleFunction from "./components/hooks/use-effect-demo/counterTitleFunction";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="counter" element={<Counter />}></Route>
          <Route path="list-colors" element={<ListColors />}></Route>
          <Route path="todo-lifecycle" element={<ToDoListParent />}></Route>
          <Route path="book-store-class" element={<BookStore />}></Route>

          <Route path="book-store-function" element={<BookStoreFunction />}>
            <Route
              path="book-view-function/:bookId"
              element={<BookViewFunction />}
            ></Route>
          </Route>
          <Route path="book-add-function" element={<BookAddFunction />}></Route>

          <Route
            path="book-store-http-function"
            element={<BookStoreHttpFunction />}
          >
            <Route
              path="book-view-http-function/:bookId"
              element={<BookViewHttpFunction />}
            ></Route>
          </Route>
          <Route
            path="book-add-http-function"
            element={<BookAddHttpFunction />}
          ></Route>

          <Route path="redux-cookie" element={<CookiesComponent />}></Route>
          <Route path="redux-book" element={<BookStoreReduxFunction />}></Route>
          <Route
            path="redux-saga-book"
            element={<BookStoreReduxSagaFunction />}
          ></Route>
          <Route path="hooks" element={<HooksHeader />}>
            <Route path="use-state" element={<UseStateDemo />}></Route>
            <Route path="use-effect" element={<CounterTitleClass />}></Route>
            <Route path="use-effect-function" element={<CounterTitleFunction />}></Route>
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
