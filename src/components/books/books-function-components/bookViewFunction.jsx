import React from "react";
import { useParams, Link } from "react-router-dom";

function BookViewFunction() {
  const params = useParams();
  return (
    <div className="container m-2">
      <div className="card">
        <div className="card-header bg-warning text-white">
          <h2> Book View </h2>
        </div>
        <div className="card-body">{params.bookId}</div>
        <div className="card-footer bg-warning">
          <Link to="/book-store-function" className="btn btn-light text-warning">
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookViewFunction;
