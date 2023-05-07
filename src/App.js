import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Display from "./components/display";
import Counter from "./components/counter";
import "./App.css";
import ListColors from './components/listColors';
import BookStore from './components/books/books-class-components/bookStore';
import BookStoreFunction from './components/books/books-function-components/bookStoreFunction';
import Header from './components/header';
import BookAddFunction from './components/books/books-function-components/bookAddFunction';
import BookViewFunction from './components/books/books-function-components/bookViewFunction';
import ToDoListParent from './components/lifecycle-methods/toDoListParent';
import BookStoreHttpFunction from './components/books/books-function-http-components/bookStoreHttpFunction';
import BookViewHttpFunction from './components/books/books-function-http-components/bookViewHttpFunction';
import BookAddHttpFunction from './components/books/books-function-http-components/bookAddHttpFunction';


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


    <div>  
      <Header></Header>
      <Routes>
        <Route path="/" element={<Display/>}></Route>
        <Route path="counter" element={<Counter/>}></Route>
        <Route path="list-colors" element={<ListColors/>}></Route>
        <Route path="todo-lifecycle" element={<ToDoListParent/>}></Route>
        <Route path="book-store-class" element={<BookStore/>}></Route>

        <Route path="book-store-function" element={<BookStoreFunction/>}>
          <Route path="book-view-function/:bookId" element={<BookViewFunction/>}></Route>
        </Route>
        <Route path="book-add-function" element={<BookAddFunction/>}></Route>

        <Route path="book-store-http-function" element={<BookStoreHttpFunction/>}>
          <Route path="book-view-http-function/:bookId" element={<BookViewHttpFunction/>}></Route>
        </Route>
        <Route path="book-add-http-function" element={<BookAddHttpFunction/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
