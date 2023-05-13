// ONLY REDUX - book crud operations with hard coded values( we are not fetching data from back end)

// actions

const { create } = require('json-server');
const redux = require('redux');

const createStore = redux.createStore;

const FETCH_ALL_BOOK = 'FETCH_ALL_BOOK';
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const fetchAllBooksActionCreator = () =>{
    return {
        type: FETCH_ALL_BOOK,
        payload: [
            {
                "id": 101,
                "bookTitle": "Harry Potter and the Order Of Phoenix",
                "bookAuthor": "J.K.Rowling",
                "bookGenre": "Fiction",
                "bookCost": "200",
                "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
              },
              {
                "id": 102,
                "bookTitle": "Harry Potter and the Sorcerers' Stone",
                "bookAuthor": "J.K.Rowling",
                "bookGenre": "Fiction",
                "bookCost": "300",
                "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              }
        ]
    }
}

const addBookActionCreator = () => {
    return {
        type: ADD_BOOK,
        payload: {
            "id": 103,
            "bookTitle": "Harry Potter and the Sorcerers' Stone",
            "bookAuthor": "J.K.Rowling",
            "bookGenre": "Fiction",
            "bookCost": "250",
            "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
    }
}

const deleteBookActionCreator = (bookId) => {
    return {
        type: DELETE_BOOK,
        payload: bookId
    }

}

// reducers

const intialState = {
    data: [],
    error: ''
};

const bookReducer = (state=intialState, action) => {
    // RETURN A NEW STATE object
    switch(action.type){
        case FETCH_ALL_BOOK:
            return {
                ...state,
                data: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_BOOK:
            return {
                ...state,
                data: state.data.filter((eachBook)=>eachBook.id!=action.payload) // here action.payload is the bookId
            }
        default:
            return state;
    }
}

// store

const store = createStore(bookReducer);

console.log("Initial State:", store.getState());

const unsubscribe = store.subscribe(()=>console.log("Updated State:" , store.getState()));

store.dispatch(fetchAllBooksActionCreator());

store.dispatch(addBookActionCreator());

store.dispatch(deleteBookActionCreator(102));

unsubscribe();
