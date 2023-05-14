import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

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
import CookiesContainer from "./components/redux/react-redux-cookie-demo/components/cookiesContainer";
//import store from "./components/redux/react-redux-cookie-demo/store/store";
import BookStoreReduxFunction from "./components/redux/react-redux-book-demo/components/bookStoreReduxFunction";
import BookStoreReduxSagaFunction from "./components/redux/react-redux-saga-book-demo/components/bookStoreReduxFunction"
import store from "./components/redux/react-redux-saga-book-demo/store/store";
import HooksHeader from "./components/hooks/hooks-header";
import UseStateDemo from "./components/hooks/useStateDemo";
import RootComponent from "./components/hooks/use-context-demo/rootComponent";

function App() {
  return (
    // <div>
    //   <h2>App Component</h2>
    //   <Display></Display>
    // </div>

    // <React.Fragment>
    //   <h2>App Component</h2>
    //   {/* <Display></Display> */}
    //   {/* <Counter></Counter> */}
    //   {/* <ListColors></ListColors> */}
    //   {/* <BookStore></BookStore> */}
    //   <BookStoreFunction></BookStoreFunction>
    // </React.Fragment>

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

          <Route path="redux-cookie" element={<CookiesContainer />}></Route>
          <Route path="redux-book" element={<BookStoreReduxFunction />}></Route>
          <Route path="redux-saga-book" element={<BookStoreReduxSagaFunction />}></Route>
          <Route path="hooks" element={<HooksHeader />}>
            <Route path="use-state" element={<UseStateDemo />}></Route>
            <Route path="use-context" element={<RootComponent />}></Route>
          </Route>

        </Routes>
      </div>
    </Provider>
  );
}

export default App;
