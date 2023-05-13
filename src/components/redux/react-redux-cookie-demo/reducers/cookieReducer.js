import BUY_A_COOKIE from "../actions/actionTypes"

//create the reducer function
const initialState = {
    numOfCookies: 10
}

const cookieReducer =(state =initialState, action) =>{
    switch(action.type){
        case BUY_A_COOKIE:
            return{
                ...state,
                numOfCookies: state.numOfCookies-1
            }
        default:
            return state;

    }
}

export default cookieReducer;