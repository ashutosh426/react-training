

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BookItemReduxFunction from "./bookItemReduxFunction";
import fetchAllBooksActionCreator from '../actions/fetchAllBooksActionCreator';

function BookStoreReduxFunction(props) {

    const [title, setTitle] = useState('LIST OF BOOKS');

    useEffect(()=>{
       props.fetchAllBooksProps(); 
    }, [])

    const renderAllBooks=()=>{
        return props.allBooksProps.map((eachBook)=>(
            <BookItemReduxFunction
                key={eachBook.id}
                data={eachBook} 
               ></BookItemReduxFunction>
        ))
    }

    return ( 
        <div className="container m-5">
                <h2>{title}</h2>
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

const mapStateToProps = (state) => {
    return {
        allBooksProps: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllBooksProps: ()=>dispatch(fetchAllBooksActionCreator())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookStoreReduxFunction);