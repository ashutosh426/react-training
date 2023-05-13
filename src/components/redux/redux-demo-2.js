// ONLY REDUX - with combineReducers

const redux = require('redux');

const combineReducers = redux.combineReducers;
const createStore = redux.createStore;


// actions
const BUY_A_COOKIE = 'BUY_A_COOKIE';
const BUY_A_CAKE = 'BUY_A_CAKE';

function buyCookieActionCreator(){
    return {
        type: BUY_A_COOKIE
    }
}

function buyCakeActionCreator(){
    return {
        type: BUY_A_CAKE
    }
}
// reducer
const initialCookiesState = {
    numOfCookies: 20
}

const initialCakeState = {
    numOfCake: 30
}

const cookiesReducer = (state = initialCookiesState, action) =>{
    // returns a new state
    switch(action.type){
        case BUY_A_COOKIE:
            return {
                ...state,
                numOfCookies: state.numOfCookies-1
            }
        default:
            return state;

    }
}

const cakeReducer = (state=initialCakeState, action) =>{
    // returns a new state
    switch(action.type){
        case BUY_A_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake-1
            }
        default:
            return state;
    }
}

// these reducers have to be combined into one reducer, lets call it the root reducer
// for this we need the combineReducer function from the redux library

const rootReducer = combineReducers({
    cookiesRedKey: cookiesReducer,
    cakeRedKey: cakeReducer
})

// store
const store = createStore(rootReducer);

console.log("Initial state: " + store.getState());

const unsubscribe = store.subscribe(()=>console.log("Updated state:" , store.getState()));

store.dispatch(buyCookieActionCreator());
store.dispatch(buyCookieActionCreator());
store.dispatch(buyCookieActionCreator());
store.dispatch(buyCakeActionCreator());
store.dispatch(buyCakeActionCreator());


unsubscribe();

