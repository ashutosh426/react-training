import { FETCH_ALL_BOOK_SUCCESS } from "./actionTypes"

const fetchAllBookSuccessActionCreator =(data) =>{
    return{
        type: FETCH_ALL_BOOK_SUCCESS,
        payload: data
    }
}

export default fetchAllBookSuccessActionCreator;