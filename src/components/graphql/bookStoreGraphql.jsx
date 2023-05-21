import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import BookItemGraphql from "./bookItemGraphql";

import { useQuery, gql } from '@apollo/client';




function BookStoreGraphql(props) {
  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);

  const GET_ALL_BOOKS = gql`
    query {
      getAllBooks{
        bookTitle, bookGenre
      }
    }
    `

const { error, loading, data } = useQuery(GET_ALL_BOOKS); // in this line the graphql query is executed
console.log("data:" , data);

useEffect(()=>{
  if(data){
    setAllBooks(data.getAllBooks);
  }
}, [loading, error, data])
  
  const renderBookStore = ()=>{
    return allBooks.map((eachBook) => (
      <BookItemGraphql
        key={eachBook.id}
        bookData={eachBook}
        onDelete={() => handleRemove(eachBook)}
        onView={() => handleView(eachBook)}
      ></BookItemGraphql>
    ));
  };

  const handleView = (book)=>{
    navigate(`book-view-graphql/${book.id}`);
  };

  const handleRemove = (book)=>{
    
  };

  return (
    <React.Fragment>
      <h2>Book Store - Graphql</h2>
      <div>
        <Link className="btn btn-success m-3" to="/root-book-graphql/book-add-graphql">
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

export default BookStoreGraphql;
