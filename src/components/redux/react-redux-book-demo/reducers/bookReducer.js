import { FETCH_ALL_BOOK } from "../actions/actionTypes"

const initialState ={
    data:[],
    error:''
}
const bookReducer =(state=initialState, action)=>{
    //return a new state
    switch(action.type){
        case FETCH_ALL_BOOK:
            return{
                ...state,
                data: [...action.payload]
            }
        default:
            return state
    }
}

export default bookReducer