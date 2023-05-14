

import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchAllBookActionCreator from '../actions/fetchAllBookActionCreator';
import BookItemReduxFunction from "./bookItemReduxFunction";

function BookStoreReduxFunction(props) {

   
    const [title, setTitle] = useState('LIST OF BOOKS');
    
    useEffect(() => {
        props.fetchAllBooksProps();
    }, []);
   
    const renderAllBooks=()=>{
        return props.allBooksProps.map((eachBook)=>(
            <BookItemReduxFunction 
                key={eachBook.id}
                data={eachBook}>
            </BookItemReduxFunction>
            
        ))
    }


    return ( 
        <div className="container m-5">
                <h2>{title}</h2>
                {/* <button type="button" className="btn btn-success" onClick={handleAddNewBook}>ADD NEW BOOK</button> */}
                <table className="table table-striped">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>TITLE</th>
                            <th>AUTHOR</th>
                            <th>GENRE</th>
                            <th>COST</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderAllBooks()}
                    </tbody>
                </table>
            </div>
     );
}

const mapStatetoProps = (state) => {
    return {
      allBooksProps: state.data,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchAllBooksProps: () => dispatch(fetchAllBookActionCreator()),
    };
  };
  

export default connect(mapStatetoProps,mapDispatchToProps)(BookStoreReduxFunction);