import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

function BookViewGraphql() {
    const params = useParams();
    
    return ( 
        
        <div className="container my-5">
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <h5>Book Details</h5>
                </div>
                <div className="card-body">
                    <div className="card-body">{params.bookId}</div>
                </div>
                <div className="card-footer bg-warning">
                    <Link className="btn btn-light btn-sm text-warning" to="/root-book-graphql/book-store-graphql">CLOSE VIEW</Link>
                </div>
            </div>
        </div>
     );
}

export default BookViewGraphql;