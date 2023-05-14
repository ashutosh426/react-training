import {takeEvery, put} from 'redux-saga/effects';
import { FETCH_ALL_BOOK } from '../actions/actionTypes';
import fetchAllBookSuccessActionCreator from '../actions/fetchAllBookSuccessActionCreator';

// create a watcher saga
function * bookSaga(){
    yield takeEvery(FETCH_ALL_BOOK, getAllBooks)
}

//create a worker saga
function * getAllBooks(){
    console.log("getBook() worker saga called....");
    //actually we should asynchronous api call

    let response = yield fetch('http://localhost:4000/books');
    console.log("Data Status:", response.status)
    if(response.status === 200){
    let dataJson = yield response.json();
    console.log("dataJson" ,dataJson);

    //so now we have to send this datajson to the reducer function
    //so that the reducer function will update the state of the store
    //so for this we will dispatch another action FETCH_ALL_BOOK_SUCCESS and
    // put this dataJson in payload
    yield put(fetchAllBookSuccessActionCreator(dataJson));
    }
    else if(response.status === 404){
        //  yield put(fetchAllBookFailureActionCreator(response.statusText));
    }
}

export default bookSaga;