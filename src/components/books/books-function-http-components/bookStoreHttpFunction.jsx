import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

import BookItemHttpFunction from "../books-function-http-components/bookItemHttpFunction";

function BookStoreHttpFunction(props) {
  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);

  useEffect(()=>{
    // here we have to use fetch api to make asynchronous http request 
    fetch('http://localhost:4000/books')
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setAllBooks(data);
    })
    .catch((err) => console.log(err))
  }, []);

  const renderBookStore = ()=>{
    return allBooks.map((eachBook) => (
      <BookItemHttpFunction
        key={eachBook.id}
        bookData={eachBook}
        onDelete={() => handleRemove(eachBook)}
        onView={() => handleView(eachBook)}
      ></BookItemHttpFunction>
    ));
  };

  const handleView = (book)=>{
    navigate(`book-view-http-function/${book.id}`);
  };

  const handleRemove = (book)=>{
    
  };

  return (
    <React.Fragment>
      <h2>Book Http Store</h2>
      <div>
        <Link className="btn btn-success m-3" to="/book-add-http-function">
          ADD NEW BOOK
        </Link>
      </div>

      <Outlet></Outlet>
      <table className="table table-striped">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>GENRE</th>
            <th>COST</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderBookStore()}</tbody>
      </table>
    </React.Fragment>
  );
}

export default BookStoreHttpFunction;
